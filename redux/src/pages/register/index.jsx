import { useState } from "react";
import InputData from "../../components/inputData";
import "./style.scss";
import { useDispatch } from "react-redux";
import { resusersTypes } from "../../redusers/redusersTypes";

function Register() {
  const [loginForm, setLoginForm] = useState({
    name: "",
    lastName: "",
    position: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    name: "",
    lastName: "",
    position: "",
    email: "",
    password: "",
    confirmPassword: "",
    passwordNotMatch: "",
    emailValidate: "",
  });

  const [toggle, setToggle] = useState(false)


  const dispatch = useDispatch()

  const validateEmail = () => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(loginForm.email)) {
      return true;
    }
    return false;
  };

  const handleChange = (value, nameID) => {
    const data = { ...loginForm };
    const errors = { ...errorMessage };
    switch (nameID) {
      case "name": {
        data.name = value;
        errors.name = "";
        break;
      }
      case "lastName": {
        data.lastName = value;
        errors.lastName = "";
        break;
      }
      case "position": {
        data.position = value;
        errors.position = "";
        break;
      }
      case "email": {
        data.email = value;
        errors.email = "";
        break;
      }
      case "password": {
        data.password = value;
        errors.password = "";
        errors.passwordNotMatch = "";
        break;
      }
      case "confirmPassword": {
        data.confirmPassword = value;
        errors.confirmPassword = "";
        errors.passwordNotMatch = "";
        break;
      }
      default:
        setErrorMessage({
          name: "",
          lastName: "",
          position: "",
          email: "",
          password: "",
          confirmPassword: "",
          passwordNotMatch: "",
          emailValidate: "",
        });
    }
    setLoginForm(data);
    setErrorMessage(errors);
  };

  // useEffect(() => {
  //   console.log(errorMessage);
  //   console.log(loginForm);
  // }, [errorMessage, loginForm]);

  const handleClick = () => {
    const errors = { ...errorMessage };

    errors.name = !loginForm.name.trim().length ? "name is empty" : "";
    errors.lastName = !loginForm.lastName.trim().length
      ? "last name is empty"
      : "";
    errors.position = !loginForm.position.trim().length
      ? "position is empty"
      : "";
    errors.email = !loginForm.email.trim().length ? "email is empty" : "";
    errors.password = !loginForm.password.trim().length
      ? "password is empty"
      : "";
    errors.confirmPassword = !loginForm.confirmPassword.trim().length
      ? "confirm password is empty"
      : "";

    if (!errors.password && !errors.confirmPassword) {
      errors.passwordNotMatch =
        loginForm.password !== loginForm.confirmPassword
          ? "passwords does not matchs"
          : "";
    } else {
      errors.passwordNotMatch = "";
    }

    if (!errors.email) {
      errors.emailValidate = validateEmail() ? "" : "fill correct email";
    }

    setErrorMessage(errors);

    for(const k in errors){
      if(errors[k]) {
        setToggle(true)
      }
    }

    if(!toggle){
      dispatch({type: resusersTypes.SET_REGISTER_DATA, payload: loginForm})
    }

    setToggle(false)


  };

  return (
    <div className="register">
      <h1>Register</h1>
      <InputData
        handleChange={handleChange}
        label="Name"
        type="text"
        classNameID={errorMessage.name ? "red" : "green"}
        nameID="name"
        error={errorMessage.name}
      />
      <InputData
        handleChange={handleChange}
        label="Last name"
        type="text"
        classNameID={errorMessage.lastName ? "red" : "green"}
        nameID="lastName"
        error={errorMessage.lastName}
      />
      <InputData
        handleChange={handleChange}
        label="Position"
        type="text"
        classNameID={errorMessage.position ? "red" : "green"}
        nameID="position"
        error={errorMessage.position}
      />
      <InputData
        handleChange={handleChange}
        label="Email"
        type="text"
        classNameID={
          errorMessage.email || errorMessage.emailValidate ? "red" : "green"
        }
        nameID="email"
        error={
          errorMessage.emailValidate
            ? errorMessage.emailValidate
            : errorMessage.email
        }
      />
      <InputData
        handleChange={handleChange}
        label="Password"
        type="password"
        classNameID={
          errorMessage.password || errorMessage.passwordNotMatch
            ? "red"
            : "green"
        }
        nameID="password"
        error={
          errorMessage.passwordNotMatch
            ? errorMessage.passwordNotMatch
            : errorMessage.password
        }
      />
      <InputData
        handleChange={handleChange}
        label="Confirm password"
        type="password"
        classNameID={
          errorMessage.confirmPassword || errorMessage.passwordNotMatch
            ? "red"
            : "green"
        }
        nameID="confirmPassword"
        error={
          errorMessage.passwordNotMatch
            ? errorMessage.passwordNotMatch
            : errorMessage.confirmPassword
        }
      />
      <button className="registerBtn" onClick={handleClick}>
        Register
      </button>
    </div>
  );
}

export default Register;
