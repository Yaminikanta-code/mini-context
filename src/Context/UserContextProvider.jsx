import React from "react";
import UserContext from "./UserContext";

/**
 * The UserContextProvider component wraps your app and provides the UserContext
 * to all of its children. It uses the useState hook to store the user state
 * and provides it as a value to the UserContext Provider.
 *
 * You should wrap your app with this component to have access to the UserContext.
 *
 * @param {ReactNode} children The children components to wrap.
 * @returns {ReactElement} The UserContextProvider component.
 */
const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
