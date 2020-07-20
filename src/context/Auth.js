import React, { useEffect, useState } from "react";
import { history, useHistory } from "react-router-dom";

import Spinner from "../components/UI/Spinner/Spinner";
import { auth } from "../firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setIsAuth(true);
        await setCurrentUser({
          auth: true,
          id: user.uid,
          name: user.displayName,
          email: user.email
        });
        setLoading(false);
      } else {
        setIsAuth(false);
        setLoading(false);
        // history.push("/");
      }
    });
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const signUp = async (credentials, setError, saveUser) => {
  try {
    await auth
      .createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then((res) => {
        saveUser({
          id: res.user.uid,
          name: credentials.fullName,
          email: credentials.email,
          teams: [],
          projects: [],
          challenges: []
        });
        return res.user.updateProfile({
          displayName: credentials.fullName
        });
      });
  } catch (error) {
    setError({ isError: true, errorMessage: error.message });
  }
};

export const signIn = async (credentials, setError) => {
  try {
    await auth.signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    );
  } catch (error) {
    setError({ isError: true, errorMessage: error.message });
  }
};

export const signOut = async (credentials) => {
  try {
    await auth.signOut();
  } catch (error) {
    // - I will handle this later
    console.log(error);
  }
};
