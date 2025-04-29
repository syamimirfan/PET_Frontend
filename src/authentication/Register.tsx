import React, { useState } from 'react';
import {
  Person,
  Email,
  Lock,
  Visibility,
  VisibilityOff,
  AccountBalanceWallet,
  ArrowLeftRounded
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

type Props = object;

const Register: React.FC<Props> = ()  => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const passwordsMatch = password === confirmPassword;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="bg-background-light shadow-lg rounded-lg flex flex-col lg:flex-row w-full max-w-7xl min-h-[70vh]">
        {/* Register Form Section */}
        <div className="lg:w-1/2 p-16 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-6 text-center text-text-primary">Create your new account!</h2>
          <form className="space-y-9 w-full max-w-sm">
            <div className="relative">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Person fontSize="large" className="text-primary" />
              </div>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="block w-full pl-14 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="relative">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Email fontSize="large" className="text-primary" />
              </div>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="block w-full pl-14 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="relative mb-4">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Lock fontSize="large" className="text-primary" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
                className="block w-full pl-14 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-3 flex items-center text-primary"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </button>
            </div>

            <div className="relative mb-4">
              <label htmlFor="confirmPassword" className="sr-only">
                Confirm Password
              </label>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Lock fontSize="large" className="text-primary" />
              </div>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                onCopy={(e) => e.preventDefault()} 
                onPaste={(e) => e.preventDefault()}
                className={`block w-full pl-14 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary`}
              />

              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute inset-y-0 right-3 flex items-center text-primary"
              >
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </button>
            </div>

            {/* Error message outside the input field */}
            {password && confirmPassword && !passwordsMatch && (
              <p className="text-red-500 text-xs">
                Passwords do not match
              </p>
            )}

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-2/3 bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-dark transition"
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className="flex justify-center mt-4">
            <p className="text-sm text-text-primary">
              Already have an account?{' '}
              <Link to="/login" className="text-primary font-semibold hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>

        {/* Design Section */}
        <div className="lg:w-1/2 bg-primary text-text-primary rounded-lg items-center justify-center p-12 flex flex-col">
          <div className="text-center space-y-28">
            <div className="space-y-1">
              <h3 className="text-2xl font-light">Hello,</h3>
              <h2 className="text-3xl font-normal mb-4">welcome to!</h2>
            </div>

            <div className="space-y-2">
              <div className="w-14 h-14 bg-text-primary text-primary flex items-center justify-center rounded-full text-xl mx-auto">
                <AccountBalanceWallet fontSize="large" />
              </div>
              <h2 className="text-3xl font-semibold">XTrack</h2>
            </div>

            <div className="space-y-2">
              <p className="text-lg font-thin mb-6">
                Manage your finances effortlessly with our secure platform. Track expenses, set goals, and stay organized.
              </p>
            </div>

            <h2 className="text-1xl font-bold mt-6">
              <ArrowLeftRounded fontSize="large" /> {'  '} SIGN UP
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
