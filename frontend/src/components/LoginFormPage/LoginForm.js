import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./LoginForm.css";

function LoginForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/songs" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      (res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      }
    );
  };

  const demoLoginHandler = (e) => {
    dispatch(
      sessionActions.login({
        credential: "Demo-lition",
        password: "password",
      })
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <div class="body"></div>
      <div class="grad"></div>
      <div class="header">
        <div soundTrap>
          Trap <span class="signupspan">Cloud</span>
        </div>
      </div>
      <div className="login">
        <label>
          <input
            type="text"
            placeholder="username/e-mail"
            value={credential}
            name="user"
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label>
          <input
            type="password"
            placeholder="password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Sign In</button>
        <br></br>
        <br></br>
        <a
          class="newsign"
          href="/signup"
          type="button"
          value="New User? Sign Up!"
        >
          New? Sign Up!
        </a>
        <br></br>
        <input
          class="demo"
          onClick={demoLoginHandler}
          type="button"
          value="Demo User"
          Demo
          User
        />
      </div>
    </form>
  );
}

export default LoginForm;
