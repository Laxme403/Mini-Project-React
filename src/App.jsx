import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Workoutf from './pages/Workoutf.jsx';
import Workoutm from './pages/Workoutm.jsx';
import Login from './pages/Login.jsx';
import Template from './pages/Template.jsx'; 
import Index from './pages/Index.jsx';   
import Modal from './pages/Modal.jsx';
import ModalBMI from './pages/Modalbmi.jsx';
import Diet from './components/Diet.jsx';
import Trial from './pages/Trial.jsx';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/login' element={<Login />} />
      <Route path='/template' element={<Template/>} />
      <Route path='/wf' element={<Workoutf/>} />
      <Route path='/wm' element={<Workoutm/>} />
      <Route path='/modal' element={<Modal/>} />
      <Route path='/diet' element={<Diet/>} />
      <Route path='/modalbmi' element={<ModalBMI/>} />
      <Route path='/trial' element={<Trial/>} />

    </Routes>
  );
}
  export default App;
  