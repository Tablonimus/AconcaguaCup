import React from 'react'
import header from "../../assets/images/header.png"
import { Navbar } from 'flowbite-react';

export default function Header() {
    return (
     
          <div className="mt-20 bg-white">
            <img src={header} className="mt-5 h- flex" alt="Logo" />
          
          </div>
       
    );
  }