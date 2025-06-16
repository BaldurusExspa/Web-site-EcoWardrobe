// Modules
// Components
import { AuthProvider } from "./api/authContext";
import { Router } from "./Router";
// Styles
import "./App.css";

const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default App;
