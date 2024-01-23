// AuthContext.js

import { createContext, useContext, useState } from 'react';
// const response = await fetch('https://preschool-library.onrender.com/v3/login', {
import axios from 'axios';
const loginAPI = process.env.REACT_APP_API_URL;
console.log("this is login api line 7",loginAPI)
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const login = async (username, password) => {
    try {
      // Perform authentication with Axios
      const response = await axios.post(loginAPI, { username, password });
      console.log("this is login api line 17",loginAPI)
      if (response.status === 200) {
        const authToken = response.data.token; // Assuming your API returns a token
        setToken(authToken);
      } else {
        // Handle login failure (show error message, etc.)
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const logout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};