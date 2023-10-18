import { displayTodayWeather } from "./displayController";

const input = document.querySelector("input");
const btn = document.querySelector("button");
const form = document.querySelector(".search");
btn.addEventListener("click", () => {
  fetchData(input);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchData(input);
});

function fetchData(input) {
  if (!input.value) return;
  displayTodayWeather(input.value);
}
displayTodayWeather("bandung");
// displayDaysForecastWeather("bandung");
// displayHoursForecastWeather("bandung");
