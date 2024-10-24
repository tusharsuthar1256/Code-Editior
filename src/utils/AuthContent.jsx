import { useContext, useState, useEffect, createContext } from 'react';
import { account } from '../config/AppwriteConfig';
import { ID } from 'appwrite';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if a user is already logged in
    const checkUserStatus = async () => {
      try {
        const accountDetails = await account.get();
        setUser(accountDetails);
      } catch (error) {
        console.log('No active session', error);
        setUser(null); // No active session
      }
      setLoading(false);
    };
    checkUserStatus();
  }, []);

  const loginUser = async (userInfo) => {
    setLoading(true);
    try {
      let response = await account.createEmailPasswordSession(userInfo.email, userInfo.password);

      // Get user details after login
      let accountDetails = await account.get();
      setUser(accountDetails);
    } catch (error) {
      console.log('Error while logging in:', error);
    }
    setLoading(false);
  };

  const logoutUser = async () => {
    try {
      await account.deleteSession('current'); // Logout the current session
      setUser(null); // Clear the user state
     navigate('/')
    } catch (error) {
      console.log('Error while logging out:', error);
    }
  };

  const signupUser = async (userInfo) => {
    try {
      const res = await account.create(ID.unique(),userInfo.email, userInfo.password, userInfo.username);
      
      // Automatically log the user in after signup
      await loginUser(userInfo);
    } catch (error) {
      console.log('Error during signup:', error);
    }
  };

  const [aiResponse, setResponse] = useState('');

  const contentData = {
    user,
    loginUser,
    logoutUser,
    signupUser,
    aiResponse,
    setResponse
  };

  return (
    <AuthContext.Provider value={contentData}>
      {loading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
