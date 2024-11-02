import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
// import GithubInfoLoader from './GithubInfoLoader'

function Github() {
    // let [data,setData]=useState({})
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/nishantchoudhary814')
    //     .then((response)=> response.json())
    //     .then((data)=>{
    //         setData(data);
    //     })
    // },[])
    let data = useLoaderData(GithubInfoLoader);
  return (
    <div className='text-center bg-gray-800 m-4 text-white p-4 text-3xl'>Github Follower : {data.followers}
        <img src={data.avatar_url} alt="Git Picture" width={300} className='flex flex-wrap'/>
    </div>
  )
}
export default Github

export const GithubInfoLoader = async () =>{
  const response= await fetch('https://api.github.com/users/nishantchoudhary814')
  return response.json;
}
