import APIRequest from "../utils/config/axio.config";



export default function getRandomUser(){
    return APIRequest.get("/",  //Esto seria lo mismo que poner axios.get, pero de esta forma usamos nuestra config
    {
        validateStatus: function (statusResponse)
        {
            return statusResponse < 500 // Resolve only if the status code is less than 500
        }
    }); 
}
