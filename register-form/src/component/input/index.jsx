import "./style.scss";
import React from "react";

class Input extends React.Component {
  state = {
    togle: true,
  };

  togglePassword = () => {
    let { togle } = this.state;
    let { type } = this.props;
    if (type === "password") {
      if (!togle) {
        this.setState({ togle: true });
      } else {
        this.setState({ togle: false });
      }
    }
  };

  render() {
    const { type, placeholder, label, name, className, error} =
      this.props;

    return (
      <div className={className ? `${className} G-input` : "G-input"}>
        <label htmlFor="">
          {label ? <p>{label}</p> : null}
          <input
            type={type && this.state.togle ? type : "text"}
            placeholder={placeholder}
            name={name ? name : null}
            onChange={this.props.handleChange}
          />
          {type ? <i onClick={this.togglePassword} className={`${type && this.state.togle? "icon-visibility": "icon-visibility_off"} my-icon`}></i> : null}
          {error ? <p className={"P-error"}>{error}</p> : null}
        </label>
      </div>
    );
  }
}

class Register extends React.Component {
  state = {
    user: {
      username: "",
      firstName: "",
      lastName: "",
      password: "",
      passwordConfirm: "",
      email: "",
    },
    errors: {
      username: "",
      firstName: "",
      lastName: "",
      password: "",
      passwordConfirm: "",
      email: "",
    },
  };

  registerUser = () => {
    console.log(this.state.user);
    if (this.validation()) {
      console.log("user registered");
    }
  };

  validation = () => {
    let isValidate = true;
    const { user } = this.state;
    const errors = {
      firstName: "",
      lastName: "",
      email: "",
    };
    if (!user.username.trim().length) {
      isValidate = false;
      errors.username = "Username name field is required";
    }

    if (!user.firstName.trim().length) {
      isValidate = false;
      errors.firstName = "First name field is required";
    }
    if (!user.lastName.trim().length) {
      isValidate = false;
      errors.lastName = "Last name field is required";
    }
    if (!user.email.trim().length) {
      isValidate = false;
      errors.email = "Email field is required";
    }
    if (user.email.length && !this.validateEmail(user.email)) {
      isValidate = false;
      errors.email = "Incorrect email value";
    }
    if (!user.password.trim().length) {
      isValidate = false;
      errors.password = "Password field is required";
    }
    if (!user.passwordConfirm.trim().length) {
      isValidate = false;
      errors.passwordConfirm = "Confirm password field is required";
    }
    if (user.password !== user.passwordConfirm) {
      errors.passwordConfirm = "Should be the same as password";
    }

    this.setState({ errors });
    return isValidate;
  };

  validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  handleChange = (e) => {
    const { user, errors } = this.state;
    user[e.target.name] = e.target.value;
    errors[e.target.name] = "";
    this.setState({ user });
  };

  render() {
    const { errors } = this.state;
    return (
      <>
        <div className="login">LOG IN</div>
        <div className="register">
          <p className="header">REGISTER FOR FREE</p>
          <Input
            handleChange={this.handleChange}
            placeholder="Username*"
            name="username"
            error={errors.username}
          />
          <Input
            handleChange={this.handleChange}
            placeholder="Email address*"
            name="email"
            error={errors.email}
          />
          <Input
            handleChange={this.handleChange}
            className="G-width-50"
            placeholder="First Name*"
            name="firstName"
            error={errors.firstName}
          />
          <Input
            handleChange={this.handleChange}
            className="G-width-50"
            placeholder="Last Name*"
            name="lastName"
            error={errors.lastName}
          />
          <Input
            handleChange={this.handleChange}
            className="G-width-50"
            placeholder="Password*"
            name="password"
            error={errors.password}
            type="password"
          />
          <Input
            handleChange={this.handleChange}
            className="G-width-50"
            placeholder="Confirm Passpord*"
            name="passwordConfirm"
            error={errors.passwordConfirm}
            type="password"
          />
          <button onClick={this.registerUser} className="signUp">
            SIGN UP
          </button>
        </div>
      </>
    );
  }
}

export default Register;
