import { displayTodayWeather } from "./displayController";

const input = document.querySelector("input");
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  if (!input.value) return;
  displayTodayWeather(input.value);
});

displayTodayWeather("bandung");
// displayDaysForecastWeather("bandung");
// displayHoursForecastWeather("bandung");
