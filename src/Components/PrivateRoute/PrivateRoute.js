import React from 'react';
import { useContext} from "react";
import { UserContext } from '../../App';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({children, ...rest}) => {
    const [loggedin , setLoggedin] =useContext(UserContext);
    return (
        <Route
        {...rest}
        render={({ location }) =>
          loggedin.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;