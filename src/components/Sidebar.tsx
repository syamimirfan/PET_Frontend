import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Dashboard,
  PersonRounded,
  Info,
  Logout,
  ChevronLeft,
  ChevronRight,
} from '@mui/icons-material';

type Props = object;

const Sidebar: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [active, setActive] = useState('Dashboard');

  const handleItemClick = (item: string) => {
    if (isOpen) {
      setActive(item);
    }
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const items = [
    { name: 'Dashboard', icon: <Dashboard />, route: '/dashboard' },
    { name: 'Profile', icon: <PersonRounded />, route: '/profile' },
  ];

  return (
    <div
      className={`bg-background-light h-screen shadow-lg${
        isOpen ? 'w-64' : 'w-16'
      } flex flex-col items-start p-4 shadow-md transition-all duration-300`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between w-full mb-6 text-text-primary">
        {isOpen && (
          <h1 className="text-xl font-bold ">XTrack</h1>
        )}
        <button
          onClick={toggleSidebar}
          className=" text-lg focus:outline-none hover:text-primary"
        >
          {isOpen ? <ChevronLeft /> : <ChevronRight />}
        </button>
      </div>

      {/* Navigation Items */}
      <ul className="flex flex-col gap-4 w-full">
        {items.map((item) => (
          <li
            key={item.name}
            className={`flex items-center p-4 rounded-lg cursor-pointer transition ${
              active === item.name && isOpen
                ? 'bg-primary text-text-primary'
                : 'text-text-primary hover:bg-primary-dark'
            } ${!isOpen && 'hover:bg-transparent pointer-events-none'}`} // Remove selection background when closed
            onClick={() => handleItemClick(item.name)}
          >
            <Link
              to={isOpen ? item.route : '#'} // Prevent navigation when closed
              className="flex items-center w-full"
            >
              <span className="text-xl">{item.icon}</span>
              {isOpen && <span className="ml-4">{item.name}</span>}
            </Link>
          </li>
        ))}
      </ul>

      {/* SideBar Footer */}
      <div className="mt-auto flex flex-col gap-4 w-full">
        <li
          className={`flex items-center p-4 rounded-lg cursor-pointer transition ${
            active === 'Help' && isOpen
              ? 'bg-primary text-text-primary'
              : 'text-text-primary hover:bg-primary-dark'
          } ${!isOpen && 'hover:bg-transparent pointer-events-none'}`} // Remove selection background when closed
          onClick={() => handleItemClick('Help')}
        >
          <Link
            to={isOpen ? '/help' : '#'} // Prevent navigation when closed
            className="flex items-center w-full"
          >
            <Info />
            {isOpen && <span className="ml-4">Help</span>}
          </Link>
        </li>
        <li
          className={`flex items-center p-4 rounded-lg cursor-pointer transition ${
            active === 'Logout' && isOpen
              ? 'bg-primary text-text-primary'
              : 'text-text-primary hover:bg-primary-dark'
          } ${!isOpen && 'hover:bg-transparent pointer-events-none'}`} // Remove selection background when closed
          onClick={() => handleItemClick('Logout')}
        >
          <div className="flex items-center w-full">
            <Logout />
            {isOpen && <span className="ml-4">Logout</span>}
          </div>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
