import React from 'react'
import { login,getAllPagedUser,getAllUsers, getUserById,createUser, deletUserById,updateUser } from '../../services/axiosCRUDService'
import {Formik,Field,Form} from "formik";
import * as Yup from "yup";

export default function AxiosCRUDExample() {

  const authUser = (values)=>{
    login(values.email,values.password)
    .then((response)=>{
      if(response.data.token){
        alert(JSON.stringify(response.data.token));
        sessionStorage.setItem("token",response.data.token);
      }else{
        sessionStorage.removeItem("token");
        throw new Error("Login failure");
      }
    }).catch((err)=>{
      alert(`Semething went wrong ${err}`);
      sessionStorage.removeItem("token");
    }).finally(()=>{
      console.log("Login ended");
    })
  }

  const loginSchema = Yup.object().shape( //Estructura del objeto, parecido a los proptypes
    {
        email: Yup.string().email("Invalid email format")
                            .required("Email is required"),
        password: Yup.string().required("Password is required")
    }
  );

  const initialCrendetials ={
    email:"",
    password:""
}


  const obtainAllUsers=()=>{
    getAllUsers().then((response)=>{
      alert(JSON.stringify(response.data.data))
    }).catch((err)=>{
      alert(`Semething went wrong ${err}`);
    })
  }

  const obtainAllPagedUsers=(page)=>{
    getAllPagedUser(page).then((response)=>{
      alert(JSON.stringify(response.data.data))
    }).catch((err)=>{
      alert(`Semething went wrong ${err}`);
    })
  }

  const obtainUserById=(id)=>{
    getUserById(id).then((response)=>{
      alert(JSON.stringify(response.data.data))
    }).catch((err)=>{
      alert(`Semething went wrong ${err}`);
    })
  }

  const createNewUser = (name,job)=>{
    createUser(name,job).then((response)=>{
      if(response.status===201)
      {
        alert(JSON.stringify(response.data))
      }else{
        throw new Error("Register failure");
      }
    }).catch((err)=>{
      alert(`Semething went wrong ${err}`);
    })
  }

  const updateUserById=(id,name,job)=>{
    updateUser(id,name,job).then((response)=>{
      if(response.data && response.status === 200)
      {
        alert(JSON.stringify(response.data))
      }

    }).catch((err)=>{
      alert(`Semething went wrong ${err}`);
    })
  }

  const deleteUser = (id)=>{
    deletUserById(id).then((response)=>{
      if(response.status === 204)
      {
        alert("User deleted");
      }

    }).catch((err)=>{
      alert(`Semething went wrong ${err}`);
    })
  }

  return (
    <div>
       <h4>Login Form</h4>
            <Formik initialValues={initialCrendetials} 
            validationSchema= {loginSchema}
            onSubmit={async (values)=>{
                authUser(values)
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
                        {/* <button type='submit' style={{display:"block",margin:"20px"}} onClick={Registrar}>Registrarse</button> */}
                    </Form>
                )
            }}               
            </Formik>
            <div>
              <button onClick={obtainAllUsers}>
                Obtain All users
              </button>
              <button onClick={()=>obtainAllPagedUsers(2)}>
                Obtain All pages users
              </button>
              <button onClick={()=>obtainUserById(3)}>
                Obtain users by id
              </button>
              <button onClick={()=>createNewUser("morpheus","leader")}>
                Create user 
              </button>
              <button onClick={()=>updateUserById(1,"morpheus","Developer")}>
                Update user 
              </button>
              <button onClick={()=>deleteUser(2)}>
                Delete user 
              </button>
            </div>
    </div>
  )
}
