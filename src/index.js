import { getWeather } from "./getWeatherData";
async function displayTodayWeather(place) {
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
}

async function displayDaysForecastWeather(place) {
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

async function displayHoursForecastWeather(place) {
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

const input = document.querySelector("input");
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  if (!input.value) return;
  displayTodayWeather(input.value);
  displayDaysForecastWeather(input.value);
  displayHoursForecastWeather(input.value);
});
// displayTodayWeather("bandung");
// displayDaysForecastWeather("bandung");
// displayHoursForecastWeather("bandung");
