import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MainPage from "./Containers/MainPage.js";
import Welcome from "./Containers/Welcome.js";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  console.log(loggedIn)
  return (
    <>
    {loggedIn === true? <MainPage/>:<Welcome setLoggedIn={(login)=>setLoggedIn(login)}/>}
    </>
  );
}

export default App;
