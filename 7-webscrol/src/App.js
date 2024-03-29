import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import SignInPage from "./pages/SignIn";
import "react-step-progress-bar/styles.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignInPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
