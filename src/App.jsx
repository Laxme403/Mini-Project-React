// App.jsx
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import BMICalculator from './pages/BMICalculator.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/bmi' element={<BMICalculator />} />
    </Routes>
  );
}

export default App;
