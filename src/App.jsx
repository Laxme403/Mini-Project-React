// App.jsx
import { Route, Routes } from 'react-router-dom';
import Workout from './pages/Workout.jsx';
import Login from './pages/Login.jsx';
import BMICalculator from './pages/BMICalculator.jsx';
import Template from './pages/Template.jsx'; 
import Index from './pages/Index.jsx';   

function App() {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/login' element={<Login />} />
      <Route path='/bmi' element={<BMICalculator />} />
      <Route path='/template' element={<Template/>} />
      <Route path='/workout' element={<Workout/>} />
    </Routes>
  );
}

export default App;
