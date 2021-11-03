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
  
  const [newUser , setNewUser] = useState(false);

  const [user, setUser] = useState({
    isSignIn: false,
    
    name: "",
    email: "",
    password: "",
    photo: "",
    error:"",
    success: false
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
        const { displayName, email, photoURL } = result.user;
        const logInUser = {
          isSignIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(logInUser);
        // const signInUser = { name: displayName, email,photoURL };
        // setLoggedin(signInUser);
        // history.replace(from);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  };

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        const signedOutUser = {
          isSignIn: false,
          name: "",
          email: "",
          photo: "",
        };
        setUser(signedOutUser);
      })
      .catch((err) => {});
  };

  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
  .then(res => {
   
    const newUserInfo  = {...user};
    newUserInfo.error = "";
    newUserInfo.success = true;
    setUser(newUserInfo);
    updateUserName(user.name);
    console.log(res);
    
  })
  .catch((error) => {

    const newUserInfo = {...user};
    newUserInfo.error = error.message;
    newUserInfo.success = false;
    setUser(newUserInfo);

  });
 }
  
   if(!newUser && user.email && user.password){
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then((res) => {
      const newUserInfo  = {...user};
    newUserInfo.error = "";
    newUserInfo.success = true;
    setUser(newUserInfo);
    console.log('sign in info', res.user);
    
    })
    .catch((error) => {
      const newUserInfo = {...user};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      setUser(newUserInfo);
    });
   }
    e.preventDefault();
  };

  const updateUserName = name => {
    const user = firebase.auth().currentUser;

user.updateProfile({
  displayName: name
 
}).then(() => {
  // Update successful
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});  
  }

  const handleChange = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 5;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };

  return (
    <div className="text-center">
      {user.isSignIn ? (
        <Button onClick={handleSignOut}>Sign out</Button>
      ) : (
        <Button onClick={signWithGoogle}>Sign In</Button>
      )}

      {user.isSignIn && <p>welcome {user.name}</p>}

      <div>
        <h1>Authentication</h1>

        <input type="checkbox" onChange={() => setNewUser(!newUser)} name= "newUser"/>
        <label htmlFor="newUser">New User Sign Up </label>

        <form onSubmit={handleSubmit}>
        { newUser && <input
          type="text"
          name="name"
          onBlur={handleChange}
          placeholder="your name"
          required
        />}
          <br />
          <input
            type="text"
            name="email"
            onBlur={handleChange}
            placeholder="your email"
            required
          />
          <br />
          <input
            type="password"
            name="password"
            onBlur={handleChange}
            placeholder="your password"
            required
          />
          <br />
          <input type="submit" value={newUser ? 'Sign up': 'Sign in'} />
        </form>
        <p style={{color:'red'}}>{user.error}</p>
        { user.success && <p style={{color:'green'}}>User { newUser ? 'Created': 'Logged In'} Successfully</p>}
      </div>
    </div>
  );
};

export default Login;
