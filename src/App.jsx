// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Login } from "./components/Login";
import { ToDoList } from "./components/ToDoList";
import { Register } from "./components/Register";

function App() {
  return (
    <>
      <div>
        <Router>
          <Link to="/Login">Login </Link>
          <Link to="/ToDoList">ToDoList </Link>
          <Link to="/Register">Register </Link>
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/ToDoList" element={<ToDoList />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
