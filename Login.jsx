import { useState } from "react";
import Content from "./Content";

function Login() {
  const [showForm, setShowForm] = useState(false);
  const [name,setName]=useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showProducts,setShowProducts]=useState(false);

  // Toggle Form Visibility
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name:${name}\nEmail: ${email}\nPassword: ${password}`);
    setName("");
    setEmail("");
    setPassword("");
    setShowForm(false); // Hide form after submission
    setShowProducts(true);
  };

  return (
   <>
   {!showProducts?(
     <div className="app-container">
      <button onClick={toggleForm} class="btn btn-primary position-absolute top-10 end-0">{showForm ? "Close" : "Sign In"}</button>

      {showForm && (
        <div className="form-container">
          <h2 align="center">Sign In</h2>
          <form onSubmit={handleSubmit} align="center">
          <div class="form-row" align="center">
          <div class="form-group col-md-5">
              <label for="inputName4">userName</label>
              <input type="text" class="form-control" value={name}
              onChange={(e) => setName(e.target.value)} id="inputName4" placeholder="Enter your Name" required/>
              </div>
            <div class="form-group col-md-5">
              <label for="inputEmail4">Email</label>
              <input type="email" class="form-control"value={email}
              onChange={(e) => setEmail(e.target.value)} id="inputEmail4" placeholder=" Enter your Email"required/>
              </div>
              <div class="form-group col-md-5">
               <label for="inputPassword4">Password</label>
               <input type="password" class="form-control"value={password}
              onChange={(e) => setPassword(e.target.value)} id="inputPassword4" placeholder="Enter your Password"required/> 
               </div>
             
               <button type="submit" class="btn btn-primary position-absolute top-50 start-50" >Submit</button>

               
               </div>
               
        
          
          
           
          </form>
        </div>
      )}
    </div>
    ):(<Content/>)}
   </>
  
  );
}

export default Login;

