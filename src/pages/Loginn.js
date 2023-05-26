import React, { useState } from "react"
import { Navigate } from "react-router-dom"
import "./loginn.css"

var l="";

 const Loginn = (props) => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [redirect, setRedirect] = useState(false);
const submit = async (e) => {
e.preventDefault();
const response = await fetch("http://localhost:8000/api/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  credentials: "include",
  body: JSON.stringify({
    
    email,
    password
  })
});


const content = await response.json();


setRedirect(true);
props.setName(content.email);
const a =content.email
l=a;
console.log(a)
console.log(l)
}
  
// console.log(storedEmail);
if(redirect==true){
  return (<Navigate  to="/"/>);
  }
  // storedEmail = localStorage.getItem('email')
  return (
    <section>
    <form onSubmit={submit}>
           <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <input
            type="email"
            className="form-control"
            placeholder="Email address"
            required
            onChange={e => setEmail(e.target.value)}
          />
    
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            required
            onChange={e => setPassword(e.target.value)}
          />

          <button className="btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
          
        </form>
        </section>
  )
}
 

export default Loginn;
export {l};













//     const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [redirect, setRedirect] = useState(false)

//   const submit = async e => {
//     e.preventDefault()

//     const response = await fetch("http://localhost:8000/api/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       credentials: "include",
//       body: JSON.stringify({
//         email,
//         password
//       })
//     });
//     const content = await response.json();
  
//       setRedirect(true)
//       props.setName(content.name)
   
//   }

//   if (redirect) {
//     return <Navigate to="/" />
//   }

