import React, { createContext, useContext, useState, useEffect } from "react";

import { auth } from "../firebase/Firebase";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signUp = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);

  const login = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

  const logOut = () => auth.signOut();

  const passwordReset = (email) => auth.sendPasswordResetEmail(email);

  const updateEmail = (email) => currentUser.updateEmail(email);

  const updatePassword = (password) => currentUser.updatePassword(password);

  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubcribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    login,
    logOut,
    passwordReset,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
