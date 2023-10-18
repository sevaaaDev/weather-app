import { getWeather } from "./getWeatherData";
export async function displayTodayWeather(place) {
  console.log("Fetching...");
  const data = await getWeather(place);
  console.log("Done fetching");
  console.table({
    Location: data.Location,
    Condition: data.Condition,
    "Local Time": data["Local Time"],
    Temperature: data.TemperatureC,
    Humidity: data.Humidity,
    ChanceOfRain: data.ChanceOfRain,
  });
  const bigTemp = document.querySelector(".temperature");
  bigTemp.innerText = data.TemperatureC;
  const desc = document.querySelector(".description");
  desc.innerText = data.Condition;
  const location = document.querySelector(".location");
  location.innerText = data.Location;
  const time = document.querySelector(".time");
  time.innerText = data["Local Time"];
  const feels = document.querySelector(".feels-value");
  feels.innerText = data.FeelsC;
  const wind = document.querySelector(".wind-value");
  wind.innerText = data.WindKPH;
  const humidity = document.querySelector(".humidity-value");
  humidity.innerText = data.Humidity;
  const chanceRain = document.querySelector(".chance-rain-value");
  chanceRain.innerText = data.ChanceOfRain;
}

export async function displayDaysForecastWeather(place) {
  console.log("Fetching...");
  const data = await getWeather(place);
  console.log("Done fetching");
  console.table({
    "Max Temperature": {
      [data.forecastDay[0]]: data.maxTempC[0],
      [data.forecastDay[1]]: data.maxTempC[1],
      [data.forecastDay[2]]: data.maxTempC[2],
    },
    "Min Temperature": {
      [data.forecastDay[0]]: data.minTempC[0],
      [data.forecastDay[1]]: data.minTempC[1],
      [data.forecastDay[2]]: data.minTempC[2],
    },
  });
}

export async function displayHoursForecastWeather(place) {
  console.log("Fetching...");
  const data = await getWeather(place);
  console.log("Done fetching");
  const currentHour = new Date().getHours();
  let obj = {
    Temp: {},
  };
  for (let i = currentHour; i < 24; i++) {
    obj["Temp"][i] = `${data[i].temp_c}°C`;
  }
  console.table(obj);
}
