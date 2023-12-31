import {
  changeBgImg,
  changePageIndicator,
  displayHoursForecastWeather,
  displayTodayWeather,
  hideError,
} from "./displayController";
import { getWeather } from "./getWeatherData";

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

const prevBtn = document.querySelector(".prev-hour");
const nextBtn = document.querySelector(".next-hour");
let data;

async function fetchData(input) {
  if (!input.value) return;
  data = await getWeather(input.value);
  input.value = "";
  if (!data) return;
  hideError();
  displayTodayWeather(data);
  displayHoursForecastWeather(data, 0, 5);
  changeBgImg(data);
  currentPage = 0;
}
nextBtn.addEventListener("click", () => {
  nextHour(data);
});
prevBtn.addEventListener("click", () => {
  prevHour(data);
});

let currentPage = 0;
let temp = "C";

function nextHour(data) {
  if (currentPage == 3) return;
  if (!data) return;
  currentPage++;
  displayHoursForecastWeather(data, currentPage * 6, currentPage * 6 + 5, temp);
  changePageIndicator(currentPage);
}

function prevHour(data) {
  if (currentPage == 0) return;
  if (!data) return;
  currentPage--;
  displayHoursForecastWeather(data, currentPage * 6, currentPage * 6 + 5, temp);
  changePageIndicator(currentPage);
}
const toggle = document.querySelector(".temperature");
toggle.addEventListener("click", () => {
  if (temp == "C") {
    temp = "F";
  } else {
    temp = "C";
  }
  if (!data) return;
  displayTodayWeather(data, temp);
  displayHoursForecastWeather(data, currentPage * 6, currentPage * 6 + 5, temp);
});
