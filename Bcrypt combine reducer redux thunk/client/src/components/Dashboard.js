import React from 'react'
import { useSelector } from 'react-redux'
import TopNavigation from './TopNavigation';

function Dashboard() {
  let storeObj =useSelector((store)=>{
    console.log(store)
    return store.reducer;
  });

  return (
    <div>
      <TopNavigation></TopNavigation>
      <h1>Dashboard</h1>
      <h1>Welcome to :{storeObj.loginDetails.firstName}</h1>
      <img src={`http://localhost:2024/${storeObj.loginDetails.profilePic}`}></img>
    </div>
  )
}

export default Dashboard
