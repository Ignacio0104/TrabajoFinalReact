import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
//Importamos la hoja de estilos

import "../../styles/taks.scss"


const TaskComponent = ({ task }) => {
    useEffect(() => {
      console.log("Task created")
    
      return () => {
        console.log(`Task ${task.name} deleted`);
      }
    },[task])
    
    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
                <span>{task.level}</span>
            </td>
            <td className='align-middle'>
                <span>{task.completed ? 'COMPLETED':'PENDING' }</span>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
