import React from "react";
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
  const { from } = location.state || { from: { pathname: "/" } };
  const [loggedin, setLoggedin] = useContext(UserContext);

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const signWithGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signInUser = { name: displayName, email };
        setLoggedin(signInUser);
        history.replace(from);
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
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
    </div>
  );
};

export default Login;
