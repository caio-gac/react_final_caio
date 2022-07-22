import {Route, Navigate} from 'react-router-dom';
import {useAuthValue} from './context/AuthContext';

// eslint-disable-next-line react/prop-types
export default function ProtectedRoute({component:Component, ...rest}) {
    const {currentUser} = useAuthValue();

    return (
        <Route
            {...rest}
            render={props => {
                return currentUser?.emailVerified ? <Component {...props} /> : <Navigate to='/' replace/>;
            }}>
        </Route>
    );
}