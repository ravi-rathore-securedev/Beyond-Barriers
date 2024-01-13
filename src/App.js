import React from 'react';
import './App.css';
import Home from './component/Home';
import { SignIn } from './component/SignIn';
import { SignUp } from './component/SignUp';
import { Test } from './component/Test';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   
      <div className="App">
          <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/SignUp' element={<SignUp />}></Route>
          <Route path='/SignIn' element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
