import APIRequest from "../utils/config/axios.config.ejercicio";

export default function getRandomJoke(){
    return APIRequest.get("/jokes/random",  //Esto seria lo mismo que poner axios.get, pero de esta forma usamos nuestra config
    {
        validateStatus: function (statusResponse)
        {
            return statusResponse < 500 // Resolve only if the status code is less than 500
        }
    }); 
}
