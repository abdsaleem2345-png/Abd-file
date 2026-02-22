import React, { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Initialize state from LocalStorage
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user_profile');
    return savedUser ? JSON.parse(savedUser) : {
      name: '',
      dob: '',
      tob: '',
      gender: '',
      isSetupComplete: false
    };
  });

  // Persist to LocalStorage whenever user state changes
  useEffect(() => {
    localStorage.setItem('user_profile', JSON.stringify(user));
  }, [user]);

  // Update specific fields or whole profile
  const updateProfile = (data) => {
    setUser(prev => ({
      ...prev,
      ...data
    }));
  };

  // Mark onboarding as finished
  const completeSetup = () => {
    setUser(prev => ({
      ...prev,
      isSetupComplete: true
    }));
  };

  // Reset profile (for Settings)
  const clearProfile = () => {
    setUser({
      name: '',
      dob: '',
      tob: '',
      gender: '',
      isSetupComplete: false
    });
    localStorage.removeItem('user_profile');
  };

  return (
    <UserContext.Provider value={{ user, updateProfile, completeSetup, clearProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
