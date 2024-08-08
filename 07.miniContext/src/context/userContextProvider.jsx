import React from "react";
import UserContext from "./userContext";
import { useState } from "react";
const UserContextProvider=({children})=>{
    const [User,setUser]=useState(null)
    // Iska kaam yahi hai ki jo bhi aa raha usko wesa ke wesa aage pahuncha de
    return(
        //Wrap karne k liye hai hamare pass ek inbuilt component
        <UserContext.Provider value={{User,setUser}}>
        {children}
        </UserContext.Provider>
         //jo bhi aa raha usko wrap karke aage pahucha do
    )
}
export default UserContextProvider;