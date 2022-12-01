export const getAllUsers = async ()=>{
    let response = await fetch("https://reqres.in/api/users");
    console.log(response);
    console.log(`Status: ${response.status}`)
    return response.json();
}

export const getAllPagedUsers = async (page)=>{
    let response = await fetch(`https://reqres.in/api/users?page=${page}`);
    console.log(response);
    console.log(`Status: ${response.status}`)
    return response.json();
}

export const getUserDetails = async (id)=>{
    let response = await fetch(`https://reqres.in/api/users/${id}`);
    console.log(response);
    console.log(`Status: ${response.status}`)
    return response.json();
}

export const login = async (email,password)=>{ //No funciona porque la API responde mal
    let body = {
        "email":email,
        "password": password
    }

    let response = await fetch("https://reqres.in/api/login",
    {
        method:"POST",
        headers : {
            "Content-type": "applicacion/json"
        },
        body: JSON.stringify(body),
    });

    return response.json();
}