import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { SESIONSTORAGE_NAME } from "../config/constans/constans";
import { PRIVATE } from "../config/routes/paths";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../src/firebase";

// SessionStorage
export const isBrowser = () => typeof window !== "undefined";
export const getAuth = () =>
  isBrowser() && window.sessionStorage.getItem(SESIONSTORAGE_NAME)
    ? window.sessionStorage.getItem(SESIONSTORAGE_NAME)
    : null;

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [userAuth, setUserAuth] = useState(getAuth());
  const navigate = useNavigate();

  // Refresh session
  useEffect(() => {
    if (!userAuth) return;
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, photoURL, displayName } = user;
        setUser({ uid, email, photoURL, displayName });
        setUserAuth(true);
      } else {
        setUser(false);
      }
    });
    return () => unsuscribe();
  }, []);

  const register = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = useCallback(async (formData) => {
    const { email, password } = formData;
    try {
      let isSignIn = await signInWithEmailAndPassword(auth, email, password);
      if (isSignIn) {
        const { uid, email, photoURL, displayName } = isSignIn.user;
        if (email) {
          setUser({ uid, email, photoURL, displayName });
          setUserAuth(true);
          window.sessionStorage.setItem(SESIONSTORAGE_NAME, true);
          return navigate({ PRIVATE }, { replace: true });
        }
      }
      window.sessionStorage.removeItem(SESIONSTORAGE_NAME);
    } catch {
      return false;
    }
  });

  const logout = useCallback(() => {
    window.sessionStorage.removeItem(SESIONSTORAGE_NAME);
    setUser(false);
    setUserAuth(false);
    signOut(auth);
  });

  const value = useMemo(
    () => ({
      userAuth,
      user,
      register,
      logout,
      login,
    }),
    [user, login]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
