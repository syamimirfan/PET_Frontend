import '../App.css';
import {
  Dashboard,
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

type Props = object;

const Profile: React.FC<Props> = () => {
    return (
      <div className="flex min-h-screen bg-background">
      <aside className="w-64 bg-primary text-white flex flex-col">
        <div className="p-6 text-2xl font-bold">Dashboard</div>
        <nav className="flex-1 space-y-4 mt-8">
          {/* Home Link */}
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center p-4 transition rounded-lg ${
                isActive ? 'bg-primary-light' : 'hover:bg-primary-light'
              }`
            }
          >
            <Dashboard className="mr-4" />
            Home
            </NavLink>

      
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `flex items-center p-4 transition rounded-lg ${
                isActive ? 'bg-primary-light' : 'hover:bg-primary-light'
              }`
            }
          >
            <Dashboard className="mr-4" />
            Profile
            </NavLink>
        </nav>
      </aside>
      </div>  
    );
}

export default Profile;