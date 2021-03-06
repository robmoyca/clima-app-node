const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=ec1fd5cfcecbe36eb6dabd298dbcafdc&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}