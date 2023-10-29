import React, {useState}from 'react';
import './Login.css';

function Login() {
  const [loginID, setLoginID] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginIDChange = (e) => {
    setLoginID(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  
  const handleLogin = () => {
    if (loginID==='' && password==='') {
      alert('Please Enter Details');
    } else {
      alert(`Login ID: ${loginID}\nPassword: ${password}`);
    }
   
  };
  return (
    <>
   <div className='right_content'>
    <h1 className='head'>Login</h1>
    <h5>Login ID</h5>
    <div><input className='username input_holder' value={loginID} onChange={handleLoginIDChange} placeholder='Enter Login ID'/></div>
    <h5>Password</h5>
    <div><input className='password input_holder' type='password' value={password} onChange={handlePasswordChange} placeholder='Enter Password'/></div>
    <div className='cont'><input type='checkbox'/><span className='checkbox'>Remember Me </span><span className='changepass'>Change Password</span></div>
    <div><input type='checkbox'/><span className='checkbox'>Agree to</span> <span className='terms'>Terms & Conditions</span></div>
    <button className='button' onClick={handleLogin}>Login</button>
    <h4 className='register'>Don't have an account? <span className='terms'>Register Here</span></h4>
   </div>
   </>
  )
}

export default Login
