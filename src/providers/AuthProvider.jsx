import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // create acount with email and password:
    const creatAccout = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //login with email and password:
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //log out from the site :
    const logOut = () => {
        return signOut(auth);
    }

    // set a observer to observe current users :
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })

        // unmunt function for stop observing:
        return () => {
            return unsubscribe()
        } 

    }, [])

    const authInfo = {
        user,
        creatAccout,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;