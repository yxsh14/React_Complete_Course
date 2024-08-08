import React, { useState } from 'react'
import { useContext } from 'react';
import UserContext from '../context/userContext';

const Login = () => {
    const [UserName, setUserName] = useState('');
    const [Password, setPassword] = useState('');
    // ab seekhna ye hai ki userContext k andar value kese fetch karunga 
    const {setUser}=useContext(UserContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({UserName,Password});
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text' 
        value={UserName}
        onChange={(e)=>setUserName(e.target.value)}
        placeholder='username'/>
        <input type='text' 
        value={Password}
        onChange={(e)=>{
            setPassword(e.target.value);
        }}
        placeholder='password'/>
        <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Login