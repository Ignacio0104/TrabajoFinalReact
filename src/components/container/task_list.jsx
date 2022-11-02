import React, {useState,useEffect} from 'react';
import { LEVELS } from '../../models/leves.enum.js';
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task';

import "../../styles/taks.scss"

const TaskListComponent = () => {
    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);
    //Estado del componente
    const [tasks, setTasks] = useState(defaultTask);
    const [loading, setLoading] = useState(true);

    //Control del ciclo de vida 

    useEffect(() => {
      console.log("Task State has been modified")
      setLoading(false); 
      return () => {
        console.log("TaskList component is going to be unmount");
      }
    }, [tasks])
    

    const changeCompleted = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
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
                                <TaskComponent task={defaultTask}></TaskComponent>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default TaskListComponent;