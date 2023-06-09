import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import axios from 'axios';


export const AuthContext = createContext(null);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null)
      const [loading, setLoading] = useState(true)

      const signUpWithEmail = (email, pass) => {
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, pass);
      }

      const logIn = (email, pass) => {
            setLoading(true);
            return signInWithEmailAndPassword(auth, email, pass);
      }

      const googleSignIn = () => {
            setLoading(true);
            return signInWithPopup(auth, googleProvider);
      }

      const setProfile = (name, photoUrl) => {
            setLoading(true)
            return updateProfile(auth.currentUser, {
                  displayName: name,
                  photoURL: photoUrl
            })
      }

      const logOut = () => {
            setLoading(true);
            return signOut(auth)
      }
      useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                  setUser(currentUser);

                  if (currentUser) {
                        axios.post('http://localhost:5000/jwt', { email: currentUser.email })
                              .then(data => {
                                    localStorage.setItem('Access_token',data.data.token)
                                    setLoading(false)
                              })
                  }
                  else{
                        localStorage.removeItem('Access_token')
                        setLoading(false)
                  }

                  // setLoading(false)
            })

            return () => {
                  return unsubscribe()
            }
      }, [])
      const authInfo = {
            user,
            loading,
            signUpWithEmail,
            logIn,
            logOut,
            setProfile,
            googleSignIn
      }
      return (
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
      );
};

export default AuthProvider;