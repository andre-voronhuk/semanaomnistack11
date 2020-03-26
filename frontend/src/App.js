import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  
 
  return (
    <div className="App">
      <header className="App-header">


        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <br></br>
          <hr></hr>
          <input onSubmit="opa();"id="nome" placeholder="opa"></input>
         
          <button onClick="opa();"> CLIQUE AQUI</button>
          <h2> bãozinho?</h2>
          <hr></hr>
          
          
          
          <h3>sucegadinho?</h3>
          <h1> opa</h1>
          

        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
    </div>
  );
  
}
function opa(){
  alert('opa');
}
export default App;
