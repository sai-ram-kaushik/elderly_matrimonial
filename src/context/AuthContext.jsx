import { useContext, createContext, useEffect } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {auth} from "../firebase"
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  useEffect(() => {
    googleSignIn()
  }, [])
  

  return (
    <AuthContext.Provider value={{googleSignIn}}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext({ AuthContext });
};
