import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import Register from './authentication/Register';
import Login from './authentication/Login';
import DashboardHome from './tracker/dashboard';
import Profile from './tracker/profile';


const App: React.FC = () => {
  return (
    <div className="m-0 box-border overflow-hidden">
          <Routes>
      <Route path="/" element={<Home />} /> {/* Homepage */}
      <Route path="/register" element={<Register />} />  {/* Register */}
      <Route path="/login" element={<Login />} />  {/* Login */}
      <Route path="/dashboard" element={<DashboardHome />} />  {/* Dashboard */}
      <Route path="/profile" element={<Profile />} />  {/* Profile */}
   </Routes>
     </div>
  );
}

export default App
