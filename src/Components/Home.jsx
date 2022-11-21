import React from 'react'
import "./style.css"
import Button from '@mui/material/Button';
import { Footer } from './Footer';
import NavBar from './NavBar';
import Home2 from './Home2';
import { Link, useNavigate } from "react-router-dom";
export const Home = () => {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate("/login");
  }
  return (
    <div>
 <div className='main'>


   <p className='mainpara'> Where Passion Meets Education </p>
   <p className='secpara'> Launch your dream career </p> 
   <p className='secpara2'><b><u>at 0 upfront fee.</u> </b></p> 
   <Button variant="contained"  href="#contained-buttons"size="large" color="error" sx="mt:5" onClick={handleClick} >Apply Now For Free</Button> 
   </div>
   <Home2 />
   
  
    </div>
  )
}
