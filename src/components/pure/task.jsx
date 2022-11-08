import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
//Importamos la hoja de estilos

import "../../styles/taks.scss"
import { LEVELS } from '../../models/leves.enum';


const TaskComponent = ({ task, complete, remove }) => {
    useEffect(() => {
      console.log("Task created")
    
      return () => {
        console.log(`Task ${task.name} deleted`);
      }
    },[task]);

    //Returns a badge depending on the level of the task
    function taskLevelBadge(){
        switch(task.level)
        {
            case LEVELS.NORMAL:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>{task.level}</span>
                    </h6>
                );
            case LEVELS.URGENT:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>{task.level}</span>
                    </h6>
                );
            case LEVELS.BLOCKING:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>{task.level}</span>
                    </h6>
                );
            default:
                break;
        }
    }

    function taskCompletedIcon(){
        if(task.completed){
            return (<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{color: 'green'}}></i>)
        }else{
            return (<i onClick={() => complete(task)} className='bi-toggle-off task-action' style={{color: 'grey'}}></i>);
        }
    }

    const taskCompleted={
        color: 'gray',
        fontWeight: "bold",
        textDecoration: 'line-through',
    }

    const taskPending={
        fontWeight: "bold",
        color: "tomato",
    }
    
    return (
        <tr className='fw-normal' style={task.completed ? taskCompleted : taskPending} >
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                <span>
                {taskCompletedIcon()}
                    <i className='bi-trash task-action' style={{color: 'tomato'}} onClick={() => remove(task)}></i>
                </span>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired

};


export default TaskComponent;
