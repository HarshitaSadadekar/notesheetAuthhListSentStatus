import React, { useState } from "react"
import { Navigate  } from "react-router-dom"
import "./loginn.css"

 const Register = () => {

  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    const submit= async(e)=>{
      e.preventDefault();
    const c=  await fetch("http://localhost:8000/api/register", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name,
                email,
                password
              })
            });
            const content=await c.json();
          //  console.log(content)
           setRedirect(true);

         
    }

   
    if(redirect){
    return <Navigate  to="/login"/>;
    }
   
  return (
    <section>
    <form onSubmit={submit}>
      <h1 className="h3 mb-3 fw-normal">Please register</h1>

      <input
        className="form-control"
        placeholder="Name"
        required onChange={e => setName(e.target.value)}
      />    

      <input
        type="email"
        className="form-control"
        placeholder="Email address"
        required onChange={e => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="form-control"
        placeholder="Password"
        required onChange={e => setPassword(e.target.value)}
      />

      <button className="btn btn-lg btn-primary" type="submit">
        Submit
      </button>
    </form>
    </section>
    
  )
}
// gN="HoD"
// console.log(gN);
export default Register
// export {gN}













//   const [name, setName] = useState("")
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const [redirect, setRedirect] = useState(false)
//     const submit = async e => {
//     e.preventDefault()

//     await fetch("http://localhost:8000/api/register", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         name,
//         email,
//         password
//       }) 
//     })

//     setRedirect(true)
//   }

//   if (redirect) {
//     return <Navigate to="/login" />
//   }
