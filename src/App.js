import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import GreetingStyled from './components/pure/greetingStyled';
import Father from './components/container/father';
import OptionalRender from './components/pure/optionalRender';

function App() {
  return (
    <div className="App">
    {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* Componente propio Greeting.jsx */}
      {/* <Greeting name={"Martín"}></Greeting> */}
      {/* Componente de ejemplo funcional */}
      {/* <Greetingf name="Martín"></Greetingf> */}
      {/* Componente de Listado de Tareas */}
      {/* <TaskListComponent></TaskListComponent> */}
      {/* Ejemplos de uso de HOOKS */}
      {/* <Ejemplo1></Ejemplo1> */}
      {/* <Ejemplo2></Ejemplo2> */}
      {/* <MiComponenteConContexto></MiComponenteConContexto> */}
      {/* Todo loq ue hay aquí, es tratado como props.children */}
      {/* <Ejemplo4 nombre="Martín">
        <h3>
          Contenido del props.children
        </h3>
      </Ejemplo4> */}
      {/* <Greetingstyled name="Martín"></Greetingstyled> */}
    {/* </header> */}
    {/*<TaskListComponent></TaskListComponent>*/}
    {/* Gestión de eventos */}
    {/*<Father></Father>*/}
    {/* <TaskListComponent></TaskListComponent> */}
    <OptionalRender></OptionalRender>
  </div>

  );
}

export default App;
