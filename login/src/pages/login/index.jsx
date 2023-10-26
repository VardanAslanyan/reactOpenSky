import { useState } from "react";
import "./style.scss";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    localStorage.setItem('token', `${username}${password}`)
    window.location.reload()
  };


  return (
    <div className="login">
      <div className="inputs">
        <label htmlFor="">
          Username
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="data"
            type="text" value={username}
          />
        </label>
        <label htmlFor="">
          Password
          <input onChange={(e)=>setPassword(e.target.value)} className="data" type="password" value={password}/>
        </label>
        <button className="btn" onClick={handleClick}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
