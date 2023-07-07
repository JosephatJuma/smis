import "./App.css";
import Dashboard from "./app/dashboard/Dashboard";
import AuthenticationTitle from "./app/auth-pages/Login";
import ForgotPassword from "./app/auth-pages/ResetPassword";
import Register from "./app/auth-pages/Register";
import { Routes, BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login/" element={<AuthenticationTitle />} />
        <Route path="/reset-password/" element={<ForgotPassword />} />
        <Route path="/sign-up/" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
