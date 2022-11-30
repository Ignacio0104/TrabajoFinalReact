import {BrowserRouter as Router,Route , Switch, Redirect} from "react-router-dom";
import { useEffect } from "react";
import NotFoundPage from "./pages/404/notFoundPage";
import LoginPage from "./pages/auth/loginPage"
import DashBoardPage from "./pages/dashboard/DashBoard";

function AppRoutingFinal() {

  let loggedIn = true;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {
            loggedIn ?
            <Redirect from="/" to="/dashboard"/>
            :
            <Redirect from="/"  to="/login"/>
          }
        </Route>
        {/* Login route */}
        <Route exact path="/login" component={LoginPage}/>
        {/* Dashboard route  */}
        <Route>
        {
            loggedIn ?
            <DashBoardPage/>
            :
            <Redirect from="/"  to="/login"/>
          }
        </Route>
        <Route component={NotFoundPage}/>
      </Switch>
    </Router>
  );
}

export default AppRoutingFinal;
