import { BrowserRouter, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { Home } from "./pages/Home";
import { SingUp } from "./pages/SingUp";
import { Router } from "./Router";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
          <Link to="/">Home</Link>
          <Link to="/singup">SingUp</Link>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
