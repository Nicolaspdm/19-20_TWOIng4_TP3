/// API : https://openweathermap.org/api

// Clé api
const API_KEY = "4081444b7b90198136fefe6ed4ccf35b";
// Url API
const API_URL_BIS = "https://api.openweathermap.org/data/2.5/forecast/daily";
// Base source icon
const API_URL_ICON = "http://openweathermap.org/img/wn/";


class API_WEATHER{
  constructor(city){
    this.city = city;
  }

  getHTMLElementFromIcon(icon){
    return `<img src=${API_URL_ICON}${icon}@2x.png class="weather-icon"/>`
  }

  fetch4daysForecast(){ //pour avoir la météo sur 4 jours
    return axios
        .get(`${API_URL_BIS}?q=${this.city}&units=metric&appid=${API_KEY}&cnt=4`, {
          crossdomain: true
        })
  }
}
