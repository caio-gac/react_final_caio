import { initializeApp } from 'firebase/app';
import{getAuth} from 'firebase/auth';
const firebaseConfig = {
    apiKey: 'AIzaSyBt9KNQxjTzsU_U0Rkzyxz-fCkheWKGW7I',
    authDomain: 'react-final-d75e1.firebaseapp.com',
    projectId: 'react-final-d75e1',
    storageBucket: 'react-final-d75e1.appspot.com',
    messagingSenderId: '753522954494',
    appId: '1:753522954494:web:369f67a447f2ab50e415af',
    measurementId: 'G-G3WZQYZS6J'
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
