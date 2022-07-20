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
    window.location.href = '/';
    console.log('Closed');
};

    
