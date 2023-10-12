import { getDay, format, getHours } from "date-fns/esm";
const key = "6104b68df4be4b02b7a52853231010";
async function fetchWeather(query) {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/${query}`, {
      cache: "no-cache",
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const dataJson = await response.json();
    return dataJson;
  } catch (err) {
    console.log(err);
  }
}
export async function getWeather(place) {
  const dataJson = await fetchWeather(
    `forecast.json?key=${key}&q=${place}&days=3`,
  );
  if (!dataJson) return;
  console.log(dataJson);
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
    Location: json.location.name,
    Condition: json.current.condition.text,
    "Local Time": format(new Date(json.location.localtime), "H:m"),
    TemperatureC: `${json.current.temp_c}°C`,
    TemperatureF: `${json.current.temp_f}°F`,
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
  let currentHour = getHours(new Date());
  let forecasthour = forecast.forecastday[0].hour;
  for (let i = currentHour; i < forecasthour.length; i++) {
    obj[i] = forecasthour[i];
  }
  return obj;
}
