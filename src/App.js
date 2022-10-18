import logo from './logo.svg';
import './App.css';
import { Button, Input } from "./components/input";
import{useState} from 'react'
import { Typography } from '@mui/material';
import Router from "../src/config/router";
import WebRouter from '../src/config/router';


function App() {
    return (
  <div className='app'>
    <WebRouter />
    {/* <Router/> */}
    </div>
    );
}


export default App;
