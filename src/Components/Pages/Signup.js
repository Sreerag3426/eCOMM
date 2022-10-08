import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

function Signup() {
  return (
    <div className='signup'>
        <form className='signupform'>
      <div className='container'>
    <h1>Sign Up</h1>
    <h5 className='info'>Please fill in this form to create an account.</h5>
    
    <label for="email"><b>First Name</b></label>
    <input type="text" placeholder="Enter Your Name" name="name1" required/>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>
    
    <div class="clearfix">
    <button type="submit" class="signupbtn">Sign Up</button>
    <Link to='./login'><button type="submit" class="cancelbtn">Login</button></Link>
      
    </div>
  </div>
</form>
</div>
  )
}

export default Signup