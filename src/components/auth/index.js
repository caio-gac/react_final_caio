import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import { auth } from 'firebaseConfig';
const authValue = auth;

export const register = async (registerEmail,registerPassword) => {
    return createUserWithEmailAndPassword(
        authValue,
        registerEmail,
        registerPassword
    );
};

export const login = async (loginEmail,loginPassword) => {
    return signInWithEmailAndPassword(
        authValue,
        loginEmail,
        loginPassword
    );  
};

export const logout = async () => {
    await signOut(authValue);
    window.location.href = '/';
    console.log('Closed');
};

    
