import React from 'react'
import {User} from "../../../models/user.class"
import { ROLES } from '../../../models/roles.enum';
import {Formik,Form,Field,ErrorMessage} from "formik";
import * as Yup from "yup";


export default function RegisterFormik() {
    let user = new User();

    const initialValues= {
        userName:"",
        email:"",
        password: "",
        confirm: "",
        role: ROLES.USER
    }

    const registerSchema = Yup.object().shape(
        {
            userName : Yup.string().min(6,"Username too short")
                                    .max(12,"Username too long")
                                    .required("Username is required"),
            email: Yup.string().email("Invalid email format")
                                    .required("Email is required"),
            role: Yup.string().oneOf([ROLES.USER,ROLES.ADMIN],"You must select a role user").required("Role is required"),
            password: Yup.string().required("Password is required")
                                    .min(8,"Username too short"),
            confirm: Yup.string().when("password",{
                is: value =>(value && value.length>0 ? true : false), //Aca validamos que el campo este completo
                then: Yup.string().oneOf([Yup.ref("password")], "Password must match!") //Este texto es el mensaje de error
                //Aca verificamos que el texto ingresado esté en la lista que le pasamos (en este caso, solo un campo)
            })
            .required("You must confirm the password")
        }
    )

    const submit = (values) =>{
        alert("Register user");
    }
  return (
    <div>
      <h4>Register Formik</h4>
      <Formik initialValues = {initialValues} 
      validationSchema={registerSchema}
      onSubmit= {async (values)=>{
        await new Promise((r)=> setTimeout(r,1000));
        alert(JSON.stringify(values,null,2));
        //localStorage.setItem("credentials",values)
      }}>
      {({value,
      touched,
      errors,
      isSubmitting,
      handleChange,
      handleBlur})=>(
        <Form>
            <label htmlFor='userName'>Username</label>
            <Field id="userName" type="userName" name="userName" placeholder="Your Username"/>

            {
                errors.userName && touched.userName &&
                (
                    <ErrorMessage name="userName" component ="div"></ErrorMessage>
                ) 
            }

            <label htmlFor='email'>Email</label>
            <Field id="email" type="email" name="email" placeholder="example@mail.com"/>
            {
                errors.email && touched.email &&(
                    <ErrorMessage name="email" component ="div"></ErrorMessage>
                ) 
            }
            <label htmlFor='password'>Password</label>
            <Field
            id="password"
            name="password"
            placeholder="Password"
            type="password"/>
            
            {
                errors.password && touched.password &&(
                    <ErrorMessage name="password" component ="div"></ErrorMessage>
                ) 
            }
            <label htmlFor='confirm'>Confirm Password</label>
            <Field
            id="confirm"
            name="confirm"
            placeholder="Confirm password"
            type="password"/>
                {
                errors.confirm && touched.confirm &&(
                    <ErrorMessage name="confirm" component ="div"></ErrorMessage>
                ) 
            }
            <button type='submit'>Register User</button>
            {
                isSubmitting ? (<p>Sending your credentials...</p>):null
            }
        </Form>
      )}
      </Formik>
    </div>
  )
}
