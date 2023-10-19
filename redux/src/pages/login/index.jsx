import { useState } from "react";
import InputData from "../../components/inputData";
import "./style.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });

  const handleChange = (value, label) => {
    switch (label) {
      case "email":
        setEmail(value);
        break;
      case "pass":
        setPassword(value);
        break;
      case "confirm password":
        setConfirmPassword(value);
        break;
      default:
        setErrorMessage({
          email: false,
          password: false,
          confirmPassword: false,
        });
    }
  };

  const handleClick = () => {
    const errors = {
        email: false,
        password: false,
        confirmPassword: false,
    }

    errors.email = !email.length
    errors.password = !password.length
    errors.confirmPassword = !confirmPassword.length
    setErrorMessage(errors);
  };

  return (
    <div className="login">
      <InputData
        handleChange={handleChange}
        label="email"
        type="text"
        classNameID={errorMessage.email ? "red": "green"}
      />
      <InputData
        handleChange={handleChange}
        label="pass"
        type="password"
        classNameID={errorMessage.password ? "red": "green"}
      />
      <InputData
        handleChange={handleChange}
        label="confirm password"
        type="password"
        classNameID={errorMessage.confirmPassword ? "red": "green"}
      />
      <button onClick={handleClick}>Register</button>
    </div>
  );
}

export default Login;
