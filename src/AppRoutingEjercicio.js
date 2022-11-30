import {BrowserRouter as Router,Route , Switch, Redirect} from "react-router-dom";
import { useEffect } from "react";
import NotFoundPage from "./pages/404/notFoundPage";
import LoginPage from "./pages/auth/loginPage"
import DashBoardPage from "./pages/dashboard/DashBoard";
import TaskPage from "./pages/tasks/taskPage";
import RegisterFormik from "./components/pure/forms/registerFormik";
import RegisterPage from "./pages/auth/registerPage";

function AppRoutingEjercicio() {

  let loggedIn = true;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {
            loggedIn ?
            <Redirect from="/" to="/tasks"/>
            :
            <Redirect from="/"  to="/login"/>
          }
        </Route>
        {/* Login route */}
        <Route exact path="/tasks" component={TaskPage}>
        {
            loggedIn ?
            <TaskPage/>
            :
            <Redirect from="/"  to="/login"/>
          }
        </Route>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/registro" component={RegisterPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </Router>
  );
}

export default AppRoutingEjercicio;
