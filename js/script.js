
// Fonction appelée lors du click du bouton
function start() {

  let city = "paris";

  if (document.getElementById('city-input').value)

  city = document.getElementById('city-input').value;

  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(city);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;

    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });

    apiWeather.getThreeDayForecast().then(function(response) {
    const data2 = response.data;

    // On récupère l'information principal
    let jour = 0;
    data2.list.forEach((data2, index) => {
      jour++;

      const main1 = data2.weather[0].main;
      const description1 = data2.weather[0].description;
      const icon1 = apiWeather.getHTMLElementFromIcon(data2.weather[0].icon);
      const temp1 = `${data2.temp.day}°C`;

      document.getElementById(`${jour}-forecast-main`).innerHTML = main1;
      document.getElementById(`${jour}-forecast-more-info`).innerHTML = description1;
      document.getElementById(`${jour}-icon-weather-container`).innerHTML = icon1;
      document.getElementById(`${jour}-forecast-temp`).innerHTML = temp1;

    });

  });


}

function update(){
const apiWeather = new API_WEATHER(document.getElementById("city-input").value);
//apiWeather.city = document.getElementById("city-input").value;
console.log(apiWeather.city);
apiWeather
  .fetchTodayForecast()
  .then(function(response) {
    // Récupère la donnée d'une API
    const data = response.data;

    // On récupère l'information principal
    const main = data.weather[0].main;
    const description = data.weather[0].description;
    const temp = data.main.temp;
    const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

    // Modifier le DOM
    document.getElementById('today-forecast-main').innerHTML = main;
    document.getElementById('today-forecast-more-info').innerHTML = description;
    document.getElementById('icon-weather-container').innerHTML = icon;
    document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;

  });

  apiWeather.getThreeDayForecast().then(function(response) {
  const data2 = response.data;

  // On récupère l'information principal
  let jour = 0;
  data2.list.forEach((data2, index) => {
    jour++;

    const main1 = data2.weather[0].main;
    const description1 = data2.weather[0].description;
    const icon1 = apiWeather.getHTMLElementFromIcon(data2.weather[0].icon);
    const temp1 = `${data2.temp.day}°C`;

    document.getElementById(`${jour}-forecast-main`).innerHTML = main1;
    document.getElementById(`${jour}-forecast-more-info`).innerHTML = description1;
    document.getElementById(`${jour}-icon-weather-container`).innerHTML = icon1;
    document.getElementById(`${jour}-forecast-temp`).innerHTML = temp1;

  });

});




}
