import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserInfo from './Components/Users/User/UserInfo';
import Create from './Components/Users/CreateUser/Create';
import Update from './Components/Users/UpdateUser/Update';
import Delete from './Components/Users/DeleteUser/Delete';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserInfo />}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/update/:id' element={<Update />}></Route>
          <Route path='/delete/:id' element={<Delete />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
