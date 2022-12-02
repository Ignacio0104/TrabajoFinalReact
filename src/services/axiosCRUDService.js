import axios from "axios";

export const login = (email,password)=>{

    let body = {
        email:email,
        password:password
    }
    return axios.post("https://reqres.in/api/login",body);
}

export const getAllUsers = ()=>{
    return axios.get("https://reqres.in/api/users");
}

export const getAllPagedUser= (page)=>{
    return axios.get(`https://reqres.in/api/users?page=${page}`);
}

export const getUserById= (id)=>{
    return axios.get(`https://reqres.in/api/users/${id}`);
}

export const createUser = (name,job)=>{
    let body = {
        name:name,
        job:job
    }
    return axios.post("https://reqres.in/api/users",body);
}

export const updateUser = (id,name,job)=>{
    let body = {
        name:name,
        job:job
    }
    return axios.put(`https://reqres.in/api/users/${id}`,body);
}

export const deletUserById= (id)=>{
    return axios.delete(`https://reqres.in/api/users/${id}`);
}

