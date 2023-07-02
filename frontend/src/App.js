import "./App.css";
import Dashboard from "./app/dashboard/Dashboard";
import AuthenticationTitle from "./app/auth-pages/Login";
import ForgotPassword from "./app/auth-pages/ResetPassword";
import AddTeacher from "./app/forms/AddTeacher";
import { Routes, BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login/" element={<AuthenticationTitle />} />
        <Route path="/reset-password/" element={<ForgotPassword />} />
        <Route path="/add-teacher/" element={<AddTeacher />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
