import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PrivateRoute from "./auth/PrivateRoute";
import Home from "./pages";
import SignInPage from "./pages/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/" component={Home} exact />
        <Route path="/signin" component={SignInPage} exact />
        <Route
          render={() => (
            <h2 style={{ textAlign: "center", marginTop: "20%" }}>
              Страница не найдена
            </h2>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
