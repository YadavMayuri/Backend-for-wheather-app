import axios from "axios"

export const GetTemp = async (req, res) => {
    try {
        const { city } = req.body;
        if (!city) return res.send("City is required!")
        const keyForWeather = "fe62eee05693dad5bcc5f21b29910d54";
        const response = await axios.post(

            `http://api.weatherstack.com/forecast?access_key=${keyForWeather}&query=${city}`
        );

        // console.log(response, "response here.");
        var temp = response.data.current.temperature
        res.send(temp.toString());

    } catch (error) {
        return res.send(error)
    }
}


//for wind sped


export const GetWindSpeed = async (req, res) => {
    try {
        const { city } = req.body;
        if (!city) return res.send("City is required!")
        const keyForWeather = "fe62eee05693dad5bcc5f21b29910d54";
        const response = await axios.post(

            `http://api.weatherstack.com/forecast?access_key=${keyForWeather}&query=${city}`
        );

        // console.log(response, "response here.");
        var wind = response.data.current.wind_speed
        res.send(wind.toString());

    } catch (error) {
        return res.send(error)
    }
}


//for Astro


export const GetAstro = async (req, res) => {
    try {
        const { city } = req.body;
        if (!city) return res.send("City is required!")
        const keyForWeather = "fe62eee05693dad5bcc5f21b29910d54";
        const response = await axios.post(

            `http://api.weatherstack.com/forecast?access_key=${keyForWeather}&query=${city}`
        );

        // console.log(response, "response here.");
        var astro = response.data.forecast['2023-06-15'].astro;
        return res.send(astro);

    } catch (error) {
        return res.send(error)
    }
}


