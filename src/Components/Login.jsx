import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

/**
 * A functional component that renders a simple login form. The component
 * will update the user state in the UserContext when the form is submitted.
 *
 * Props:
 * None
 *
 * State:
 * username: The current value of the username input field
 * password: The current value of the password input field
 *
 * Hooks:
 * useContext: Used to get the setUser method from the UserContext
 * useState: Used to store the current values of the username and password
 *   input fields
 *
 * Returns:
 * A JSX element containing a simple login form
 */
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      {"    "}
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default Login;
