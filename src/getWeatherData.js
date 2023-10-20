import { getDay, format, getHours } from "date-fns/esm";
import { hideLoading, showError, showLoading } from "./displayController";
const key = "6104b68df4be4b02b7a52853231010";
async function fetchWeather(query) {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/${query}`, {
      mode: "cors",
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const dataJson = await response.json();
    return dataJson;
  } catch (err) {
    showError(err);
  }
}
export async function getWeather(place) {
  showLoading();
  const dataJson = await fetchWeather(
    `forecast.json?key=${key}&q=${place}&days=3`,
  );
  hideLoading();
  if (!dataJson) return;
  return filterJson(dataJson);
}
function filterJson(json) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let forecast = json.forecast;
  let obj = {
    FeelsC: `${Math.floor(json.current.feelslike_c)}°C`,
    FeelsF: `${Math.floor(json.current.feelslike_f)}°F`,
    Location: `${json.location.name}`, //, ${json.location.country}`,
    isDay: json.current.is_day,
    Condition: json.current.condition.text,
    "Local Time": format(
      new Date(json.location.localtime),
      "EEEE, d MMM yy | HH:mm",
    ),
    Time: new Date(json.location.localtime).getHours(),
    TemperatureC: `${Math.floor(json.current.temp_c)}°C`,
    TemperatureF: `${Math.floor(json.current.temp_f)}°F`,
    WindKPH: `${json.current.wind_kph} KpH`,
    WindMPH: `${json.current.wind_mph} MpH`,
    Humidity: `${json.current.humidity}%`,
    ChanceOfRain: `${forecast.forecastday[0].day.daily_chance_of_rain}%`,
    forecastDay: [
      days[getDay(new Date(forecast.forecastday[0].date))],
      days[getDay(new Date(forecast.forecastday[1].date))],
      days[getDay(new Date(forecast.forecastday[2].date))],
    ],
    maxTempC: [
      `${forecast.forecastday[0].day.maxtemp_c}°C`,
      `${forecast.forecastday[1].day.maxtemp_c}°C`,
      `${forecast.forecastday[2].day.maxtemp_c}°C`,
    ],
    minTempC: [
      `${forecast.forecastday[0].day.mintemp_c}°C`,
      `${forecast.forecastday[1].day.mintemp_c}°C`,
      `${forecast.forecastday[2].day.mintemp_c}°C`,
    ],
    maxTempF: [
      `${forecast.forecastday[0].day.maxtemp_f}°F`,
      `${forecast.forecastday[1].day.maxtemp_f}°F`,
      `${forecast.forecastday[2].day.maxtemp_f}°F`,
    ],
    minTempF: [
      `${forecast.forecastday[0].day.mintemp_f}°F`,
      `${forecast.forecastday[1].day.mintemp_f}°F`,
      `${forecast.forecastday[2].day.mintemp_f}°F`,
    ],
  };
  let currentHour = getHours(new Date(json.location.localtime));
  let forecasthour = forecast.forecastday[0].hour;
  for (let i = currentHour; i < forecasthour.length; i++) {
    obj[i] = forecasthour[i];
  }
  for (let i = 0; i < currentHour; i++) {
    obj[`n${i}`] = forecast.forecastday[1].hour[i];
  }
  return obj;
}
