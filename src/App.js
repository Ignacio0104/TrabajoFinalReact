import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import GreetingStyled from './components/pure/greetingStyled';

function App() {
  return (
    <div className="App">
     {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio Greeting.jsx */}
        {/* <Greeting name={"Martín"}></Greeting> */}
        {/* Componente de ejemplo funcional */}
        {/* <Greetingf name="Martín"></Greetingf> */}
        {/* Componente de Listado de Tareas */}
        {/*<TaskListComponent></TaskListComponent>*/}
        {/*<Ejemplo1></Ejemplo1>*/}
        {/*<Ejemplo2></Ejemplo2>*/}
        {/*<ComponenteConContexto></ComponenteConContexto>*/}
        {/*<Ejemplo4 nombre="Nacho">
        Todo lo que hay aca es tratado como props.children 
          <h3>
            Contenido del children
          </h3>
        </Ejemplo4>*/}
        {/*<GreetingStyled name="Nacho"></GreetingStyled>
      </header>*/}
      <TaskListComponent></TaskListComponent>
    </div>
  );
}

export default App;
