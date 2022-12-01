import axios from "axios";

//Default congig
export default axios.create(
    {
        baseURL: "https://randomuser.me/api",
        responseType: "json",
        timeout:6000//Peticiones fallan si tardan mas de 6 segundos
    }
)