import React from 'react'
import { useHistory } from 'react-router-dom';
import {Formik,Field,Form} from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape( //Estructura del objeto, parecido a los proptypes
    {
        email: Yup.string().email("Invalid email format")
                            .required("Email is required"),
        password: Yup.string().required("Password is required")
    }
);

export default function LoginFormix() {
    const initialCrendetials ={
        email:"",
        password:""
    }

    const Registrar= ()=>{
        history.push("/registro");
    }

    const history = useHistory();
  return (
    <div>
        <h4>Login Form</h4>
            <Formik initialValues={initialCrendetials} 
            validationSchema= {loginSchema}
            onSubmit={async (values)=>{
                await new Promise((r)=>setTimeout(r,1000));
                alert(JSON.stringify(values,null,2));
                await localStorage.setItem("credentials",values)
                //history.push("/profile");
                history.push("/dashboard");
                }}               
            >
            {props=>{
                const {
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                }=props

                return (
                    <Form>
                        <label htmlFor="email"> Email </label>
                        <Field id="email" name="email" placeholder="Your email" type="email"/>

                        {errors.email && touched.email && (
                            <div className='error'>
                                <p>{errors.email}</p>
                            </div>
                        )}
                        
                        <label htmlFor="password"> Password </label>
                        <Field id="password" name="password" placeholder="Your password" type="password"/>

                        {errors.password && touched.password && (
                            <div className='error'>
                                <p>{errors.password}</p>
                            </div>
                        )}
                        
                        <button type='submit' onClick={props.login}>Login</button>
                        {isSubmitting ? (<p>Login your credentials...</p>) : null}
                        <button type='submit' style={{display:"block",margin:"20px"}} onClick={Registrar}>Registrarse</button>
                    </Form>
                )
            }}               
            </Formik>
    </div>
  )
}
