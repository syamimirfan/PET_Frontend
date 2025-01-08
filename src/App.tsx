import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import Register from './authentication/Register';
import Login from './authentication/Login';


const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* Homepage */}
      <Route path="/register" element={<Register />} />  {/* Register */}
      <Route path="/login" element={<Login />} />  {/* Login */}
   </Routes>
  );
}

export default App
