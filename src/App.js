import "./App.css";
import { MemoryRouter, Link } from "react-router-dom";

import { Home } from "./pages/Home";
import { DefaultLayout } from "./component/DefaultLayout";
import { Router } from "./Router";

function App() {
  return (
    <>
      <Router />
    </>
  );
}

export default App;
