import { getWeather } from "./getWeatherData";
export function displayTodayWeather(data) {
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

export function displayHoursForecastWeather(data, baseIndex, maxIndex) {
  const currentHour = data.Time;
  let arr = [];
  for (let i = 0; i < 24; i++) {
    if (!data[i + currentHour]) {
      arr[i] = {
        temp_c: `${Math.floor(data[`n${i + currentHour - 24}`].temp_c)}°C`,
        condition: data[`n${i + currentHour - 24}`].condition.text,
        isDay: data[`n${i + currentHour - 24}`].is_day,
      };
      continue;
    }
    arr[i] = {
      temp_c: `${Math.floor(data[i + currentHour].temp_c)}°C`,
      condition: data[i + currentHour].condition.text,
      isDay: data[i + currentHour].is_day,
    };
  }
  const container = document.querySelector(".data-forecast");
  container.innerHTML = "";
  for (let i = baseIndex; i <= maxIndex; i++) {
    if (!arr[i]) return;
    const card = document.createElement("div");
    card.classList.add("card");
    const hour = document.createElement("p");
    hour.classList.add("hour");
    hour.innerText = `${i + currentHour}:00`;
    if (i + currentHour > 24) {
      hour.innerText = `${i + currentHour - 24}:00`;
    }
    const temperature = document.createElement("p");
    temperature.classList.add("temperature-forecast");
    temperature.innerText = arr[i].temp_c;
    const icon = document.createElement("img");
    icon.src = "icons/cloud.svg";
    if (arr[i].condition.includes("rain")) {
      icon.src = "icons/rainy.svg";
    }
    if (arr[i].condition.includes("Clear")) {
      icon.src = "icons/clear-night.svg";
    }
    if (arr[i].condition.includes("Sunny")) {
      icon.src = "icons/sunny.svg";
    }
    if (arr[i].condition.includes("Partly")) {
      icon.src = "icons/partly-cloudy-night.svg";
    }
    if (arr[i].condition.includes("Partly") && arr[i].isDay) {
      icon.src = "icons/partly-cloudy.svg";
    }
    if (arr[i].condition.includes("snow")) {
      icon.src = "icons/snowy.svg";
    }
    card.append(hour, temperature, icon);
    container.append(card);
  }
  console.table(arr);
}

export function changePageIndicator(currentPage) {
  const dots = document.querySelectorAll(".dot");
  for (let dot of dots) {
    const img = dot.querySelector("img");
    img.src = "icons/dot.svg";
  }
  const img = dots[currentPage].querySelector("img");
  img.src = "icons/dot-selected.svg";
  console.log(dots, img);
}

export function changeBgImg(data) {
  const body = document.querySelector("body");
  if (data.Condition.includes("rain")) {
    body.className = "dark-cloudy";
    return;
  }
  if (!data.isDay) {
    body.className = "night";
    return;
  }
  if (data.Condition.includes("Sunny")) {
    body.className = "sunny";
    return;
  }
  body.className = "cloudy";
}

export function showError() {
  const errorWrapper = document.querySelector(".error-wrapper");
  errorWrapper.classList.add("show");
  console.log("jsdjf");
}

export function hideError() {
  const errorWrapper = document.querySelector(".error-wrapper");
  errorWrapper.classList.remove("show");
}

export function showLoading() {
  const modal = document.querySelector('.modal')
  modal.classList.add('show')
}

export function hideLoading() {
  const modal = document.querySelector('.modal')
  modal.classList.remove('show')
}
