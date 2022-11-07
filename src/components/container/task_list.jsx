import React, {useState,useEffect} from 'react';
import { LEVELS } from '../../models/leves.enum.js';
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task';

import "../../styles/taks.scss"
import TaskForm from '../pure/forms/taskForm.jsx';

const TaskListComponent = () => {
    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);
    const defaultTaskDos = new Task('Example 2', 'Default description 2', true, LEVELS.URGENT);
    const defaultTaskTres = new Task('Example 3', 'Default description 3', false, LEVELS.BLOCKING);
    const defaultTaskCuatro = new Task('Example 4', 'Default description 4', true, LEVELS.NORMAL);
    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask,defaultTaskDos,defaultTaskTres,defaultTaskCuatro]);
    const [loading, setLoading] = useState(true);

    //Control del ciclo de vida 

    useEffect(() => {
      console.log("Task State has been modified")
      setLoading(false); 
      return () => {
        console.log("TaskList component is going to be unmount");
      }
    }, [tasks])
    

    function completeTask(task){
        console.log('Complete this Task:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        // We update the state of the component with the new list of tasks and it will update the
        // Iteration of the tasks in order to show the task updated
        setTasks(tempTasks);
    }

    function deleteTask(task){
        console.log('Detele this Task:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index,1);
        setTasks(tempTasks);
    }

    function addTask(task){
        console.log('Detele this Task:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }




    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                {/*Card header */}
                    <div className='card-header p-3'> {/* padding 3*/}
                        <h5>
                            Your Tasks:
                        </h5>
                    </div>
                  {/*Card body */}
                    <div className='card-body' data-mdb-perfect-scrollbar="true" style={{position : "relative",height: "400px"}}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/*TO DO iteracion*/}
                                {tasks.map((task,index)=>
                                    {
                                        return (
                                            <TaskComponent key={index} task={task} 
                                            complete={completeTask} remove={deleteTask}></TaskComponent>
                                        );
                                    }
                                )}
                            </tbody>
                        </table>
                    </div>                 
                </div>
            </div>
            <TaskForm add={addTask}></TaskForm>
        </div>
    );
};


export default TaskListComponent;
