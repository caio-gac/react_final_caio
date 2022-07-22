/* eslint-disable react/prop-types */
import {useState, useEffect} from 'react';
import {auth} from './firebaseConfig';
import {onAuthStateChanged} from 'firebase/auth';
import {AuthProvider} from './context/AuthContext';
import Home from 'pages/Home';
import Main from 'pages/Index';
import NotFound from 'pages/NotFound';
import Register from 'pages/signup_register';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';


export default function AppRouter(){
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });
    }, []);

    return(
        <Router>
            <AuthProvider value={{currentUser}}>
                <Routes>
                    <Route path='/' element={<Main />}/>
                    {currentUser != null && <Route path='/home' element={<Home />}/>}
                    <Route path='*' element={<NotFound />}/>
                    <Route path='/register' element={<Register />}/>
                </Routes>
            </AuthProvider>
        </Router>
    );
}