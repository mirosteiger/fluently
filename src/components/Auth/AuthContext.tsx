import React, { createContext, useContext, useEffect, useState } from "react";
//@ts-ignore
import { auth } from "../Firebase/firebase";
import { onAuthStateChanged, User } from "firebase/auth";



const defaultContext = {
  currentUser: {
    email: null
  }
};

export const AuthContext = createContext(defaultContext);
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState<null | User>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    //@ts-ignore
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthValue() {
  return useContext(AuthContext);
}

export default AuthProvider;
