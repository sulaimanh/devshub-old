import React, { useEffect, useState } from "react";
import { history, useHistory } from "react-router-dom";

import Spinner from "../components/UI/Spinner/Spinner";
import { auth } from "../firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser({
          id: user.uid,
          name: user.displayName,
          email: user.email
        });
        setLoading(false);
      } else {
        console.log("OVER HERE");
        setLoading(false);
        history.push("/");
      }
    });
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser
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
    console.log("WE GOT AN ERROR!!!!");
    console.log(error);
  }
};
