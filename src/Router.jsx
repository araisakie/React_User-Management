import { Switch, Route, BrowserRouter } from "react-router-dom";

import { Home } from "./pages/Home";
import { SignUp } from "./pages/SignUp";
import { DefaultLayout } from "./component/DefaultLayout";
import { HeaderOnly } from "./component/HeaderOnly"

export const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          </Route>
          <Route path="/user">
            <HeaderOnly>
              <SignUp />
            </HeaderOnly>
          </Route>
        </Switch>
      </BrowserRouter>

    )
}