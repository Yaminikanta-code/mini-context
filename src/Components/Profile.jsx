import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

/**
 * A functional component that displays a welcome message to the user after logging in.
 * If the user is not logged in, it displays a message asking the user to login.
 *
 * @returns A JSX element displaying the welcome message or the login message.
 */
function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div>Please Login</div>;
  return <div>WelCome {user.username}</div>;
}

export default Profile;
