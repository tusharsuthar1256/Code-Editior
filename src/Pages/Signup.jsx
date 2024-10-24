import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContent';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 
  const navigate = useNavigate();

  const { user, signupUser } = useAuth();
  const signupRef = useRef(null);

  const handleSignup = (e) => {
    e.preventDefault();

    // Password length validation
    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    const userInfo = {
      email,
      password,
      username
    };

    signupUser(userInfo)
      .catch((err) => {
        console.log("Signup failed", err);
        // Handle any additional errors (e.g., duplicate accounts, invalid email format)
      });

      navigate('/login')
  };



  return (
    <div className="flex items-center justify-center bg-gray-900 h-[calc(100vh-84px)] px-4">
      <div className="w-full text-white max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>

        <form className="space-y-4" onSubmit={handleSignup} ref={signupRef}>
          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="text-black w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your username"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="text-black w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (e.target.value.length >= 8) setError(''); // Clear error if valid
              }}
              required
              className="text-black w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your password"
            />
         
          </div>

          {/* Error Message for Password */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Sign Up
          </button>
        </form>

        <p className="text-right">
          <Link to='/login' className="text-blue-400 hover:underline">Already have an account?</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
