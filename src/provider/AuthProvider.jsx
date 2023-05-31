import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext= createContext(null);
const auth= getAuth(app);

const AuthProvider = ({children}) => {
      const [user, setUser]= useState(null)
      const [loading, setLoading]= useState(true)

      const signUpWithEmail=(email,pass)=>{
            setLoading(true)
            return createUserWithEmailAndPassword(auth,email,pass);
      }

      const logIn=(email,pass)=>{
            setLoading(true);
            return signInWithEmailAndPassword(auth,email,pass);
      }

      const setProfile=(name,photoUrl)=>{
            setLoading(true)
            return updateProfile(auth.currentUser,{
                  displayName:name,
                  photoURL:photoUrl
            })
      }

      const logOut=()=>{
            setLoading(true);
            return signOut(auth)
      }
      useEffect(() =>{
            const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
                  setUser(currentUser);
                  setLoading(false)
            })

            return ()=>{
                  return unsubscribe()
            }
      },[])
      const authInfo={
            user,
            loading,
            signUpWithEmail,
            logIn,
            logOut,
            setProfile
      }
      return (
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
      );
};

export default AuthProvider;