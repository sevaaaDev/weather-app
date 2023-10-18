import {
  displayHoursForecastWeather,
  displayTodayWeather,
} from "./displayController";

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
  displayHoursForecastWeather(input.value, 0, 7);
  currentPage = 0;
}

const prevBtn = document.querySelector(".prev-hour");
const nextBtn = document.querySelector(".next-hour");

nextBtn.addEventListener("click", nextHour);
prevBtn.addEventListener("click", prevHour);

let currentPage = 0;

function nextHour() {
  if (currentPage == 2) return;
  currentPage++;
  displayHoursForecastWeather(
    input.value,
    currentPage * 8,
    currentPage * 8 + 7,
  );
}

function prevHour() {
  if (currentPage == 0) return;
  currentPage--;
  displayHoursForecastWeather(
    input.value,
    currentPage * 8,
    currentPage * 8 + 7,
  );
}
// displayTodayWeather("bandung");
// displayHoursForecastWeather("bandung", 8, 15);
// displayDaysForecastWeather("bandung");
// displayHoursForecastWeather("bandung");
