const key = "6104b68df4be4b02b7a52853231010";
async function getTodayWeather(place) {
  const dataJson = await fetchWeather(`current.json?key=${key}&q=${place}`);
  if (!dataJson) return;
  console.log(dataJson);
  return dataJson;
}

async function getForecastWeather(place) {
  const dataJson = await fetchWeather(
    `forecast.json?key=${key}&q=${place}&days=3`,
  );
  if (!dataJson) return;
  console.log(dataJson);
  return dataJson;
}

async function fetchWeather(query) {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/${query}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const dataJson = await response.json();
    return dataJson;
  } catch (err) {
    console.log(err);
  }
}

async function displayTodayWeather(place) {
  const data = await getTodayWeather(place);
  console.table({
    Location: data.location.name,
    Condition: data.current.condition.text,
    "Local Time": data.location.localtime,
    Temperature: `${data.current.temp_c}°C`,
    Humidity: `${data.current.humidity}%`,
  });
}

async function displayDaysForecastWeather(place) {
  const data = await getForecastWeather(place);
  let forecast = data.forecast;
  let location = data.location;
  console.table({
    "Max Temperature": {
      [forecast.forecastday[0]
        .date]: `${forecast.forecastday[0].day.maxtemp_c}°C`,
      [forecast.forecastday[1]
        .date]: `${forecast.forecastday[1].day.maxtemp_c}°C`,
      [forecast.forecastday[2]
        .date]: `${forecast.forecastday[2].day.maxtemp_c}°C`,
    },
    "Min Temperature": {
      [forecast.forecastday[0]
        .date]: `${forecast.forecastday[0].day.mintemp_c}°C`,
      [forecast.forecastday[1]
        .date]: `${forecast.forecastday[1].day.mintemp_c}°C`,
      [forecast.forecastday[2]
        .date]: `${forecast.forecastday[2].day.mintemp_c}°C`,
    },
  });
}
displayDaysForecastWeather("jakarta");
displayTodayWeather("bandung");
