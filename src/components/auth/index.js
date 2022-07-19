import { useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from 'firebase/auth';
import { auth } from 'firebaseConfig';
// import './App.css';
// import auth  from './firebaseConfig';
const authValue = auth;
// const [registerEmail, setRegisterEmail] = useState('');
// const [registerPassword, setRegisterPassword] = useState('');
// const [loginEmail, setLoginEmail] = useState('');
// const [loginPassword, setLoginPassword] = useState('');

// const [user, setUser] = useState({});

// onAuthStateChanged(auth, (currentUser) => {
//     setUser(currentUser);
// });

export const register = async (registerEmail,registerPassword) => {
    // onAuthStateChanged(auth, (currentUser) => {
    //     setUser(currentUser);
    // });
    try {
        const user = await createUserWithEmailAndPassword(
            authValue,
            registerEmail,
            registerPassword
        );
        console.log(user);
    } catch (error) {
        console.log(error.message);
    }
};

export const login = async (loginEmail,loginPassword) => {
    try {
        const user = await signInWithEmailAndPassword(
            authValue,
            loginEmail,
            loginPassword
        );
        return user;
    } catch (error) {
        return console.log(error.message);
    }
};

export const logout = async () => {
    await signOut(authValue);
};

    
