import React from "react";

const UserContext = React.createContext() //it's a method available in react to eleminate prop drilling to create a global context like redux does. So we can pass the state of any variable to any particular component from here without going into different props.
export default UserContext;

// Jese hi humne context banaya ye humko ek major chezz dega provider
// mtlb kya hai 

{/* <Usercontext>
    <Home/>
    <About/>
    <Card/>
</Usercontext> */}


// usercontext ek provider hoga jo inner components ko saari states provide kar raha hoga Home, About, Card ko is case mai 