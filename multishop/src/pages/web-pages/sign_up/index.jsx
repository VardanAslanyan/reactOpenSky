import InputComponent from "../../../components/inputComponent";
import "./style.scss";
import { routerLinks } from "../../../router";
import { Link } from "react-router-dom";
import { useState } from "react";

function SignUp() {
  const [userInput, setUserInput] = useState({
    userData: {
        email: "",
        password: "",
        confirmPassword: "",
      },
    error: {
        email: "",
        password: "",
        confirmPassword: "",
      }
  });

  function handleChange(value, fieldName) {
    let { userData, error } = userInput
    userData[fieldName] = value
    error[fieldName] = ''
    setUserInput({userData, error})
  }


  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  function handleClick() {
    const { userData, error } = userInput;
    if (!userData.email.trim().length) {
      error.email = "Email is empty";
    }
    if (!userData.password.trim().length) {
      error.password = "Password is empty";
    }
    if (!userData.confirmPassword.trim().length) {
      error.confirmPassword = "Confirm password is empty";
    }

    if(userData.password.trim().length && userData.confirmPassword.trim().length) {
        if(userData.password !== userData.confirmPassword){
            error.password = "passwords must be the same"
            error.confirmPassword = error.password
        }
    }

    if(userData.email.trim().length && !validateEmail(userData.email)){
        error.email = "Entered wrong email"
    }

    setUserInput({ userData, error });
  }


  return (
    <div className="G-container">
      <div className="sign-up">
        <div className="sign-in-box">
          <h3>Sign Up</h3>
          <InputComponent
            handleChange={handleChange}
            placeholder={"Enter Your Email"}
            name="email"
            errorMessage={userInput.error.email}
          />
          <InputComponent
            handleChange={handleChange}
            name="password"
            errorMessage={userInput.error.password}
            placeholder={"Create Your Password"}
            type={"password"}
          />
          <InputComponent
            handleChange={handleChange}
            name="confirmPassword"
            errorMessage={userInput.error.confirmPassword}
            placeholder={"Confirm Your Password"}
            type={"password"}
          />
          <button onClick={handleClick} className="sign-in-btn">
            Sign Up
          </button>
          <p>
            Already have an account?{" "}
            <Link to={routerLinks.SIGN_IN}>Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
