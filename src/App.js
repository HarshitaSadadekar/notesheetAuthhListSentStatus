// import './App.css';
// import React from "react";
// import { observer } from 'mobx-react';
// import LoginForm from './LoginForm';
// // import InputField from './InputField';
// // import SubmitButton from './SubmitButton';
// import Dashboard from './Page/Dashboard';
// // import UserStore from './stores/UserStore';


import React, {useEffect, useState} from 'react';
import './App.css';
import Loginn from "./pages/Loginn";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
         
    const[name , setName] = useState('');

    useEffect( ()=>{
       
        const fetchData = async()=>{
              const response= await fetch("http://localhost:8000/api/user", {
               method: "GET",
               headers: { "Content-Type": "application/json" },
               credentials: "include",
      
           })
           const content = await response.json();
           setName(content.name);
          
           };
           fetchData();
    },[]);





    return (
        <div className="App">
     
    <main classname="form-signin w-100 m-auto">
      <Router>



        <Nav name={name} setName={setName}/>

          
        <main classname="form-signin w-100 m-auto">
        <Routes>
            
        <Route  path='/' exact element={<Home name={name} />} />
        <Route path='/login' element={<Loginn setName={setName}/>} />
        <Route path='/register' element={<Register/>} />
        </Routes>
        </main>
        </Router>
    </main>
    

        </div>
    );
}

export default App;

































// const base_url = window.SERVER_ADDRESS
// class App extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       logged_in : localStorage.getItem('token') ? true:false,
//       username : '',
//       displayed_form : ''
//     }
//   }

//   componentDidMount(){
//     if(this.state.logged_in){
//       fetch(base_url + '/current_user/',{
//         method : 'GET',
//         headers : {
//           Authorization : `JWT ${localStorage}.getItem('token')}`
//         }
//       })
//       .then(res => res.json())
//       .then(resp => {
//         this.setState({ username : resp.username })
//       })
//       .catch(err => console.log(err));
//     }
//   }

//   display_form = (formName) => {
//     this.setState({
//       displayed_form : formName
//     });
//   }

//   handleLoginChange = event => {
//     this.setState({
//       [event.target.name] : event.target.value
//     })
//   }
//   handleLogout = () => {
//     localStorage.removeItem('token');
//     this.setState({logged_in : false, username : ''})
//   }

//   handleLogin = (e, data) => {
//     e.preventDefault();
// 		console.log(data)
// 		fetch(base_url + 'token-auth/', {
// 			crossDomain : true,
// 			withCredentials : true,
// 			async : true,
// 			method : 'POST',
// 			headers : {
// 				'Content-Type' : 'application/json',
// 			},
// 			body : JSON.stringify(data)
// 		})
// 		.then(response => response.json())
// 		.then(json => {
// 			localStorage.setItem('token', json.token);
// 			this.setState({
// 				logged_in : true,
// 				username : json.user.username
// 			})
// 		})
// 		.catch(error => {
// 			console.log(error)
// 		})
// 		this.setState({
// 			displayed_form : ''
// 		})
//   }
  
//   render(){
//     // const { logged_in, username, displayed_form } = this.state;
//     return (
//       <div className='container'>
//              <Dashboard />
//            </div>
//       // <div className='container'>
//       //   <LoginForm
//       //   logged_in = {logged_in}
//       //   handleLogin = {this.handleLogin}
//       //   handleLoginChange = {this.handleLoginChange}
//       //   handleLogout = {this.handleLogout}
//       //   username = {username}
//       //   displayed_form = {displayed_form}
//       //   display_form = {this.display_form}
//       //    />
//       //    <div>{
//       //     this.state.logged_in
//       //     ? <Dashboard />
//       //     : 'Please log in'
//       //    }</div>
//       // </div>
//     )
//   }
// }

// export default observer(App);





// async componentDidMount() {
//   try{
//     let res = await fetch('/isLoggedIn', {
//       method: 'post',
//       headers: {
//         'Accept': 'application/json',
//         'Content-type': 'application'
//       }
//     });
//     let result = await res.json();

//     if(result && result.success){
//       UserStore.loading = false;
//       UserStore.isLoggedIn = true;
//       UserStore.username = result.username;
//     }
//     else{
//       UserStore.loading = false;
//       UserStore.isLoggedIn = false;
//     }
//   }

//   catch(e) {
//     UserStore.loading = false;
//     UserStore.isLoggedIn = false;
//   }
// }


// async doLogout() {
//   try{
//     let res = await fetch('/logout', {
//       method: 'post',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       }
//     });
//     let result = await res.json();

//     if(result && result.success){
//       UserStore.isLoggedIn = false;
//       UserStore.username = '';
//     }
//     else{
//       UserStore.loading = false;
//       UserStore.isLoggedIn = false;
//     }
//   }

//   catch(e) {
//     console.log(e)
//   }
// }


// render() {

//   if(UserStore.loading){
//     return (
//       <div className='app'>
//         <div className='container'>
//           Loading, please wait...
//         </div>
//       </div>
//     );
//   }
//   else{
//     if(UserStore.isLoggedIn){
//       return (
//         <div className='app'>
//           <div className='container'>
//             Welcome {UserStore.username}
//             <SubmitButton text={'Log Out'} disabled={false} onClick={ () => this.doLogout() } />
//           </div>
//         </div>
//       );
//     }
//   }

//   return (
//     <div className='container'>
//       <Dashboard />
//     </div>
//   );
// }