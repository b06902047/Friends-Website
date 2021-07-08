import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Appbar from "./Components/Appbar.js";
import Welcome from "./Components/Welcome.js";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  console.log(loggedIn)
  return (
    <>
    {loggedIn === true? <Appbar/>:<Welcome setLoggedIn={(login)=>setLoggedIn(login)}/>}
    </>
  );
}

export default App;
