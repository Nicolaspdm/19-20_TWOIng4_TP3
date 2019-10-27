
// Fonction appelée lors du click du bouton
function getThreeDayForecast() {

//ville par défault = Paris
  let city = "paris";

// On récupère la valeur de la text-box pour changer la requête
  if (document.getElementById('city-input').value)

  city = document.getElementById('city-input').value;

  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(city);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetch4daysForecast()
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
}
