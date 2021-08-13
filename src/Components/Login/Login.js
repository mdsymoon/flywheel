import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

import { useContext } from "react";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Login.css";
import { Button } from "react-bootstrap";

const Login = () => {
  

  const history = useHistory();
  const location = useLocation();
  // const { from } = location.state || { from: { pathname: "/" } };
  const [loggedin, setLoggedin] = useContext(UserContext);

  const [user, setUser] = useState({
    isSignIn : false,
    name: "",
    email: "",
    photo: ""
  });



  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const signWithGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email,photoURL } = result.user;
        const logInUser ={ 
          isSignIn: true,
          name: displayName,
          email: email,
          photo: photoURL
          
        }
        setUser(logInUser);
        const signInUser = { name: displayName, email,photoURL };
        setLoggedin(signInUser);
        // history.replace(from);
      })
      .catch(err =>{
        console.log(err);
        console.log(err.message);
      })
      
  };

  

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
        
      <div className="login-form">
      <h3>Login</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <input {...register("exampleRequired", { required: true })} /><br/>
          {errors.exampleRequired && <span>This field is required</span>}
          <br />
          <input {...register("exampleRequired", { required: true })} /><br/>
          {errors.exampleRequired && <span>This field is required</span>}
          <br /> */}
          
          <input required className="login-form-input"></input><br/>
          <input required className="login-form-input"></input><br/>
          <input type="checkbox" name="checkbox" className="checkbox"></input>
         <label for="checkbox" >Remember Me</label>

          <Button type="submit" className="login-button">Login</Button>
        </form>
      </div>

      <Button onClick={signWithGoogle}>Sign In</Button>
      <Button >Sign out</Button>
      {
        user.isSignIn && <p>welcome {user.name}</p>
      }
    </div>
  );
};

export default Login;
