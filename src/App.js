import React from 'react';
import './App.css';
import { SignIn } from './component/SignIn';
import { SignUp } from './component/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './component/Main';
import { JobList } from './component/JobList';
import { Scholarlist } from './component/Scholarlist';

function App() {
  return (
   
      <div className="App">
          <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/SignUp' element={<SignUp />}></Route>
          <Route path='/SignIn' element={<SignIn />}></Route>
          <Route path='/job' element={<JobList />}></Route>
          <Route path='/scholar' element={<Scholarlist />}></Route>
        </Routes>
      </BrowserRouter>
     
      </div>
  );
}

export default App;
