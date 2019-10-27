
// Fonction appelée lors du click du bouton
function getThreeDayForecast() {

//ville par défault = Paris
  let city = "paris";

// On récupère la valeur de la text-box pour changer la requête
  if (document.getElementById('city-input').value)

  city = document.getElementById('city-input').value;

  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(city);
  // Appel de la fonction fetch4daysForecast

  apiWeather
    .fetch4daysForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.list[0].weather[0].main;
      const description = data.list[0].weather[0].description;
      const temp = data.list[0].main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.list[0].weather[0].icon);

      const main1 = data.list[1].weather[0].main;
      const description1 = data.list[1].weather[0].description;
      const temp1 = data.list[1].main.temp;
      const icon1 = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);

      const main2 = data.list[2].weather[0].main;
      const description2 = data.list[2].weather[0].description;
      const temp2 = data.list[2].main.temp;
      const icon2 = apiWeather.getHTMLElementFromIcon(data.list[2].weather[0].icon);

      const main3 = data.list[3].weather[0].main;
      const description3 = data.list[3].weather[0].description;
      const temp3 = data.list[3].main.temp;
      const icon3 = apiWeather.getHTMLElementFromIcon(data.list[3].weather[0].icon);



      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;

      document.getElementById('aftoday-forecast-main').innerHTML = main1;
      document.getElementById('aftoday-forecast-more-info').innerHTML = description1;
      document.getElementById('aficon-weather-container').innerHTML = icon1;
      document.getElementById('aftoday-forecast-temp').innerHTML = `${temp1}°C`;

      document.getElementById('afftoday-forecast-main').innerHTML = main2;
      document.getElementById('afftoday-forecast-more-info').innerHTML = description2;
      document.getElementById('afficon-weather-container').innerHTML = icon2;
      document.getElementById('afftoday-forecast-temp').innerHTML = `${temp2}°C`;

      document.getElementById('affftoday-forecast-main').innerHTML = main3;
      document.getElementById('affftoday-forecast-more-info').innerHTML = description3;
      document.getElementById('affficon-weather-container').innerHTML = icon3;
      document.getElementById('affftoday-forecast-temp').innerHTML = `${temp3}°C`;

    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
