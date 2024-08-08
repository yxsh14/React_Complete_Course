import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/userContext'

const Profile = () => {
    const {User}=useContext(UserContext);
    console.log(User);
    if (!User) return <div>Please Login</div>
    return <div>Welcome {User.UserName}</div>
}

export default Profile