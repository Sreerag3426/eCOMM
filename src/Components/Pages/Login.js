import React from 'react'
import Home from './Home'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
     <div className='login'>
        <form className='loginform'>
      <div className='container'>
    <h1>Log In</h1>
    {/* <h5 className='info'>Please fill in this form to create an account.</h5> */}
    
    <label for="email"><b>User Name</b></label>
    <input type="text" placeholder="Enter Your Name" name="name1" required/>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>
    
    <label>
      <input type="checkbox" name="remember"/> Remember me
    </label>
    <div class="clearfix">
    {/* <button type="submit" class="">Login</button> */}
    <Link to='/home'><button type="submit" class="signupbtn">Login</button></Link>
    
      
    </div>
  </div>
</form>
</div>

    </div>
  )
}

export default Login