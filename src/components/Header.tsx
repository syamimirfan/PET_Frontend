import '../App.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-background shadow-sm">
            <div className="w-full mx-auto flex justify-between items-center px-10 py-4 min-h-[70px]">
                {/* Logo */}
                <Link to="/" className="flex items-center mr-4">
                    <h1 className="text-3xl font-bold text-text-primary">
                        <span className="text-primary">Xtr</span>ack
                    </h1>
                </Link>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden bg-primary focus:outline-none rounded-md p-2 flex items-center justify-center"
                >
                    {isOpen ? (
                        <CloseIcon fontSize="medium" className="text-white" />
                    ) : (
                        <MenuIcon fontSize="medium" className="text-white" />
                    )}
                </button>

                {/* Desktop Buttons */}
                <div className="hidden lg:flex items-center space-x-6 ml-4">
                    <Link
                        to="/login"
                        className="border-2 border-primary text-text-primary py-2 px-6 rounded-sm hover:border-primary-dark"
                    >
                        Log In
                    </Link>

                    <Link
                        to="/register"
                        className="bg-primary text-text-primary py-2 px-6 rounded-md hover:bg-primary-dark"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>

            {/* Mobile Menu (Animated) */}
            <div
                className={`
                    flex flex-col items-center overflow-hidden transition-all duration-500 ease-in-out lg:hidden
                    ${isOpen ? 'max-h-40 opacity-100 my-6 space-y-4' : 'max-h-0 opacity-0'}
                `}
            >
                <Link
                    to="/login"
                    className="w-1/2 text-center border-2 border-primary text-text-primary py-2 rounded-sm hover:border-primary-dark"
                    onClick={() => setIsOpen(false)}
                >
                    Log In
                </Link>

                <Link
                    to="/register"
                    className="w-1/2 text-center bg-primary text-text-primary py-2 rounded-md hover:bg-primary-dark"
                    onClick={() => setIsOpen(false)}
                >
                    Sign Up
                </Link>
            </div>
        </header>
    )
}

export default Header;
