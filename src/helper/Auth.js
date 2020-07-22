import React, { useEffect, useState } from "react";
import { auth, firebase } from "../firebase";

import Spinner from "../components/UI/Spinner/Spinner";
import { useHistory } from "react-router-dom";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuth(true);
        setCurrentUser({
          ownerId: user.uid,
          name: user.displayName,
          email: user.email,
          isNewUser: user.metadata.lastSignInTime === user.metadata.creationTime
        });
        setLoading(false);
        history.push("/home/teams");
      } else {
        setIsAuth(false);
        setLoading(false);
        history.push("/");
      }
    });
  }, [isAuth]);

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
        console.log(res);
        saveUser({
          ownerId: res.user.uid,
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

// https://firebase.google.com/docs/auth/web/github-auth#expandable-1
export const signInWithGoogle = async (saveUser) => {
  const provider = new firebase.auth.GoogleAuthProvider();

  try {
    await auth.signInWithPopup(provider).then((res) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      saveUser({
        ownerId: res.user.uid,
        name: res.user.displayName,
        email: res.user.email,
        teams: [],
        projects: [],
        challenges: []
      });
      // ...
    });
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = error.credential;
  }
};

export const signInWithGitHub = async (saveUser) => {
  const provider = new firebase.auth.GithubAuthProvider();

  console.log(provider);

  try {
    await auth.signInWithPopup(provider).then((res) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      saveUser({
        ownerId: res.user.uid,
        name: res.user.displayName,
        email: res.user.email,
        teams: [],
        projects: [],
        challenges: []
      });
      // ...
    });
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = error.credential;
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
