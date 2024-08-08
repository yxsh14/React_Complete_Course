import React,{ useEffect } from 'react'
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
const Github = () => {
    // const [Data, setData] = useState([]);
    // useEffect(() => {
    //   fetch("https://api.github.com/users/yxsh14")
    //   .then((response)=> response.json())
    //   .then((data)=>{
    //     setData(data);
    //   })
    // }, [])


    // We have another New & Optimized way of doing this we can use the concept of loader
    // THe concept of loader was first introduced in Next.js but we can use it in react to.
    // The reason to use this Loader component visit karne se pahle hi given url pr request kar dega or data manga kar rakh lega cache mai jisse ki page change karne pr jo halka delay aa raha wo nhi aaaye qki data to pahle se cache mai wo pahle hi manga liye hai page pr click karne se.
    // Main.js pr jayenge or loader insert kar denge
    const Data=useLoaderData()
  return (
    <div className='bg-gray-700 text-white m-50 text-lg'>Github Repositories: {Data.public_repos}</div>
  ) 
}

export default Github


export const githubInfoLoader=async()=>{
    const response=await fetch("https://api.github.com/users/yxsh14");
    return response.json();
}