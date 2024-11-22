import UserContextProvider from "./Context/UserContextProvider";
import "./App.css";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

/**
 * The App component serves as the main entry point of the application.
 * It uses the UserContextProvider to manage user state and renders
 * the application's header, as well as the Login and Profile components.
 *
 * Returns:
 * A JSX fragment containing the UserContextProvider with child components.
 */
function App() {
  return (
    <>
      <UserContextProvider>
        <h1>Mini Context</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default App;
