import React from 'react'
import Header from '../NavBar/Header'
import NavBar from "../NavBar/NavBar"
import header from "../../assets/images/header.png"


export default function Home() {
  return (
    <div className='flex flex-col'>
      <NavBar/>
     <Header/>
    </div>
  )
}
