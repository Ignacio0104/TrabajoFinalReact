import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/leves.enum';
import { Task } from '../../../models/task.class';
import {Formik,Form,Field,ErrorMessage} from "formik";
import * as Yup from "yup";

const Taskformik = ({add, length}) => {

    const initialValues= {
        name:"",
        description:"",
        completed: false,
        level: LEVELS.NORMAL
    }

    const taskCreationSchema = Yup.object().shape(
        {
            name : Yup.string().min(6,"Taskname too short")
                                    .max(50,"Taskname too long")
                                    .required("Taskname is required"),
            description: Yup.string().min(10,"Description too short")
                                        .max(150,"Description too long")
                                        .required("Description is required"),
            level: Yup.string().oneOf([LEVELS.NORMAL,LEVELS.BLOCKING,LEVELS.URGENT],"You must select a task level").required("Level is required")
        }
    )

    function addTask(values){
        //e.preventDefault();
        const newTask = new Task(
            values.name,
            values.description,
            false,
            LEVELS.BLOCKING
        );
        add(newTask);
    }

    return (
        <div>
          <h4>Register Formik</h4>
          <Formik initialValues = {initialValues} 
          validationSchema={taskCreationSchema}
          onSubmit= {async (values)=>{
            await new Promise((r)=> setTimeout(r,1000));
            alert(JSON.stringify(values,null,2));
            addTask(values);
          }}>
          {({value,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur})=>(
            <Form>
                <label htmlFor='name'>Task name</label>
                <Field id="name" type="name" name="name" placeholder="Your taskname"/>
    
                {
                    errors.name && touched.name &&
                    (
                        <ErrorMessage name="name" component ="div"></ErrorMessage>
                    ) 
                }
    
                <label htmlFor='description'>Description</label>
                <Field id="description" type="description" name="description" placeholder="Your description"/>
                {
                    errors.description && touched.description &&(
                        <ErrorMessage name="description" component ="div"></ErrorMessage>
                    ) 
                }
                <label htmlFor='level'>Level</label>
                <Field id="level" name="level" as="select" >
                    <option value={LEVELS.NORMAL}>Normal</option>
                    <option value={LEVELS.URGENT}>Urgent</option>
                    <option value={LEVELS.BLOCKING}>Blocking</option>
                </Field>
                {
                    errors.level && touched.level &&(
                        <ErrorMessage name="level" component ="div"></ErrorMessage>
                    ) 
                }
                <button type='submit'>{length>0 ? "Add new task" : "Create first task"}</button>
                {
                    isSubmitting ? (<p>Adding your task...</p>):null
                }
            </Form>
          )}
          </Formik>
        </div>
      );
}


export default Taskformik;