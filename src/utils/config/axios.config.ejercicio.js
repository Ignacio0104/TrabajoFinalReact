import axios from "axios";

//Default congig
export default axios.create(
    {
        baseURL: "https://api.chucknorris.io",
        responseType: "json",
        timeout:6000//Peticiones fallan si tardan mas de 6 segundos
    }
)