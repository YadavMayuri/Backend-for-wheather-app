import axios from "axios"
export const GetTemp = async(req,res)=>{
    try{
        const{city,id,password} =req.body;
        if(!city) return res.send ("City is required!")
        const keyForWeather = "fe62eee05693dad5bcc5f21b29910d54";
        const response = await axios.post(

            `http://api.weatherstack.com/forecast?access_key=${keyForWeather}&query=${city}`
        );

        console.log(response, "response here.");
        response.send(response.current.temperature)

    }catch(error){
        return res.send(error)
    }
}