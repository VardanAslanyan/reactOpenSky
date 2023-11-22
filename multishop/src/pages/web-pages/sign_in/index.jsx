import { Link } from "react-router-dom";
import InputComponent from "../../../components/inputComponent";
import "./style.scss";
import { routerLinks } from "../../../router";
import { useState } from "react";

function SignIn() {
  const [userInput, setUserInput] = useState({
    userData: {
      email: "",
      password: "",
    },
    error: {
      email: "",
      password: "",
    },
  });

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


  const validatePassword = (password) => {
    return String(password)
      .match(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
      );
  };

  function handleChange(value, fieldName) {
    let { userData, error } = userInput;
    userData[fieldName] = value;
    error[fieldName] = "";
    setUserInput({ userData, error });
  }

  function handleClick() {
    const { userData, error } = userInput;

    let loginToggle = false;

    const emailTrim = userData.email.trim()
    const passwordTrim = userData.password.trim()

    if (!emailTrim.length) {
      error.email = "Email is empty";
      loginToggle = true;
    }
    if (!passwordTrim.length) {
      error.password = "Password is empty";
      loginToggle = true;
    }

    if (emailTrim.length && !validateEmail(emailTrim)) {
      error.email = "Entered wrong email";
      loginToggle = true;
    }


    if(passwordTrim.length && !validatePassword(passwordTrim)){
      error.password = "Password is too weak"
      loginToggle = true
    }

    setUserInput({ userData, error });
    if(!loginToggle){
      localStorage.setItem('token', 'dkjfnsjfndjfndsfkjndskjfnsdkj')
      window.location.reload()
    }
  }

  return (
    <div className="G-container">
      <div className="sign-in">
        <div className="sign-in-box">
          <h3>Sign In</h3>
          <InputComponent
            placeholder={"Enter Your Email"}
            name="email"
            handleChange={handleChange}
            errorMessage={userInput.error.email}
          />
          <InputComponent
            placeholder={"Enter Your Password"}
            name="password"
            handleChange={handleChange}
            errorMessage={userInput.error.password}
            type={"password"}
          />
          <p>Forgot your password?</p>
          <button onClick={handleClick} className="sign-in-btn">
            Sign In
          </button>
          <p>
            Don't have an account? <Link to={routerLinks.SIGN_UP}>Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
