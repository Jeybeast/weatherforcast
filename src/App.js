import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './Search';


function App() {
    return ( <div className ="App">
        <h1 className ='header'> </h1> 
        <Router>
        <Routes>
        <Route path = '/'element = { <Search/> }/>
        </Routes>
         </Router >  
         </div>
    );
}

export default App;