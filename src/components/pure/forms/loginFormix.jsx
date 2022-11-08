import React from 'react'
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
  return (
    <div>
        <h4>Login Form</h4>
            <Formik initialValues={initialCrendetials} 
            validationSchema= {loginSchema}
            onSubmit={async (values)=>{
                await new Promise((r)=>setTimeout(r,1000));
                alert(JSON.stringify(values,null,2))
                localStorage.setItem("credentials",values)}}               
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
                        
                        <button type='submit'>Login</button>
                        {isSubmitting ? (<p>Login your credentials...</p>) : null}
                    </Form>
                )
            }}
                
            </Formik>
    </div>
  )
}
