import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Contact(){
    const navigate = useNavigate()
    const location = useLocation()
    let Click = () =>{
        navigate('/Home')
    }
    console.log(location.state)
    return  (
    <>
    <div>
  <h1>Contact {" "} {location.state && location.state.title ?  location.state.title: "--" } </h1>
    <button onClick={Click}>Go to home</button>
    </div>
    </>
    );
}