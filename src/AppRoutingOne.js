import {BrowserRouter as Router,Route,Link,Switch, Redirect} from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/home/homePage";
import NotFoundPage from "./pages/404/notFoundPage";
import AboutPage from "./pages/about-faqs/AboutPage";
import ProfilePage from "./pages/profile/ProfilePage";
import TaskPage from "./pages/tasks/taskPage";
import TaskDetailPage from "./pages/tasks/TaskDetailPage";
import LoginPage from "./pages/auth/loginPage";
import RegisterPage from "./pages/auth/registerPage";
import PropsPage from "./pages/home/PropsPage";

function AppRoutingOne() {

  let logged =  false;

  let taskList = [
    {
      id:1,
      name: "Task 1",
      description : "My first task"
    },
    {
      id:2,
      name: "Task 2",
      description : "My second task"
    }
  ]

  useEffect(() => {
    logged =  localStorage.getItem('credentials');
  },[])
  
  return (
    <Router>  {/*Conjunto de rutas */}

    <div>
      <aside>
        <Link to="/">| HOME |</Link>
        <Link to="/about">| ABOUT |</Link>
        <Link to="/faqs">| FAQs |</Link>
        <Link to="/task/1">| Task 1 |</Link>
        <Link to="/task/2">| Task 2 |</Link>
        <Link to="/404">| Not existing Route |</Link>
        <Link to="/login">| Login |</Link>
      </aside>
      <main>
      <Switch>  {/*Ahora se llama ROUTES */}
        <Route exact path='/' component={HomePage}/>  {/* ruta exacta en la direccion de inicio se carga el homepage */}
        <Route exact path='/online-state' component={PropsPage}/> 
        <Route path="/login" component={LoginPage}>
          {
            logged ?
            ()=>{
              alert ("You are already loged in. Redirecting to home...")
              return <Redirect to="/"/> 
            }
            :
            <LoginPage/>
          }
        </Route>
        <Route path='/(about|faqs)' component={AboutPage}/>{/*El parentesis nos permite que 2 rutas lleven a la misma pagina */}
        <Route path='/profile' component={ProfilePage}>
          {
            logged ? <ProfilePage/> 
            : 
            ()=>{
              alert("Error, redirecting to login!");
              return <Redirect to="/login"/> 
              }//Si no esta logueado, se manda al home
          }
        </Route>
        <Route path="/tasks" component={ TaskPage }/>
        <Route 
        exact 
        path="/task/:id"
        render={({match})=> //Es la URL
        (
          <TaskDetailPage task={taskList[match.params.id-1]}/>//De la ruta sacamos los parametros y el id
        )}
        ></Route>
        {/* Siempre dejar al final nuestro 404 */}
        <Route component={NotFoundPage} /> {/* Si no encuentra una ruta, va a entrar aca. Funcion como switch */}
      </Switch>
      </main>
    </div>
    </Router>
  );
}

export default AppRoutingOne;
