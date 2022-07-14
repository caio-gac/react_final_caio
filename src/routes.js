import Home from 'pages/Home';
import Main from 'pages/Index';
import NotFound from 'pages/NotFound';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

export default function AppRouter(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path='/home' element={<Home />}/>
                <Route path='*' element={<NotFound />}/>
                 
            </Routes>
        </Router>
    );
}