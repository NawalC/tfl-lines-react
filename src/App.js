import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from "./Data";



function App() {
  return (
    <div className="m-4">
      <header className="text-3xl mb-8">
				<h1>Transport For London Line Information</h1>
			</header>
     <Data /> 
     
     
    </div>
  );
  }

export default App;
