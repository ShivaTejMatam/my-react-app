import './App.css';
import Alert from './Components/Alert';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   //Link
// } from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]= useState('light');

  const showAlert = (message,type) =>{
       setAlert({
        msg:message,
        type:type
       })   
       setTimeout(() => {
            setAlert(null);
       },3000)      
  }


  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has enabled","success") ;
    }

    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has enabled","success") ;
    }
  }
 
  return (
  <> 
   {/* <Navbar title = "Reactjs" aboutText = "About"/> */}
   {/* <Router> */}
    <Navbar title='Reactjs' mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>} />
    </Routes> */}
    <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
    </div> 
    {/* </Router> */}
  </>
  );   
}  

export default App;
 