import { Switch, Route, BrowserRouter } from "react-router-dom";

import { Home } from "./pages/Home";
import { SignUp } from "./pages/SignUp";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/user">
          <SignUp />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
