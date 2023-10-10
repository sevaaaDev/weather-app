/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const key = "6104b68df4be4b02b7a52853231010";
async function getTodayWeather(place) {
  let dataJson = await fetchWeather(`current.json?key=${key}&q=${place}`);
  console.log(dataJson);
  displayTodayWeather(dataJson);
}

async function getForecastWeather(place) {
  let dataJson = await fetchWeather(
    `forecast.json?key=${key}&q=${place}&days=3`,
  );
  console.log(dataJson);
  displayForecastWeather(dataJson);
}

async function fetchWeather(query) {
  try {
    let response = await fetch(`http://api.weatherapi.com/v1/${query}`);
    if (!response.ok) {
      throw Error(response.status);
    }
    let dataJson = await response.json();
    return dataJson;
  } catch (err) {
    console.log(err);
  }
}

function displayTodayWeather(data) {
  console.table({
    Location: data.location.name,
    Condition: data.current.condition.text,
    "Local Time": data.location.localtime,
    Temperature: `${data.current.temp_c}°C`,
    Humidity: `${data.current.humidity}%`,
  });
}

function displayForecastWeather(data) {
  let forecast = data.forecast;
  let location = data.location;
  console.table({
    "Average Temperature": {
      [forecast.forecastday[0]
        .date]: `${forecast.forecastday[0].day.avgtemp_c}°C`,
      [forecast.forecastday[1]
        .date]: `${forecast.forecastday[1].day.avgtemp_c}°C`,
      [forecast.forecastday[2]
        .date]: `${forecast.forecastday[2].day.avgtemp_c}°C`,
    },
    "Chance of rain": {
      [forecast.forecastday[0]
        .date]: `${forecast.forecastday[0].day.daily_chance_of_rain}%`,
      [forecast.forecastday[1]
        .date]: `${forecast.forecastday[1].day.daily_chance_of_rain}%`,
      [forecast.forecastday[2]
        .date]: `${forecast.forecastday[2].day.daily_chance_of_rain}%`,
    },
  });
}

getForecastWeather("jakarta");

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBLHdEQUF3RCxJQUFJLEtBQUssTUFBTTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsSUFBSSxLQUFLLE1BQU07QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0QsTUFBTTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEMsaUJBQWlCLHNCQUFzQjtBQUN2QyxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQ0FBc0M7QUFDekQ7QUFDQSxtQkFBbUIsc0NBQXNDO0FBQ3pEO0FBQ0EsbUJBQW1CLHNDQUFzQztBQUN6RCxLQUFLO0FBQ0w7QUFDQTtBQUNBLG1CQUFtQixpREFBaUQ7QUFDcEU7QUFDQSxtQkFBbUIsaURBQWlEO0FBQ3BFO0FBQ0EsbUJBQW1CLGlEQUFpRDtBQUNwRSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGtleSA9IFwiNjEwNGI2OGRmNGJlNGIwMmI3YTUyODUzMjMxMDEwXCI7XHJcbmFzeW5jIGZ1bmN0aW9uIGdldFRvZGF5V2VhdGhlcihwbGFjZSkge1xyXG4gIGxldCBkYXRhSnNvbiA9IGF3YWl0IGZldGNoV2VhdGhlcihgY3VycmVudC5qc29uP2tleT0ke2tleX0mcT0ke3BsYWNlfWApO1xyXG4gIGNvbnNvbGUubG9nKGRhdGFKc29uKTtcclxuICBkaXNwbGF5VG9kYXlXZWF0aGVyKGRhdGFKc29uKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Rm9yZWNhc3RXZWF0aGVyKHBsYWNlKSB7XHJcbiAgbGV0IGRhdGFKc29uID0gYXdhaXQgZmV0Y2hXZWF0aGVyKFxyXG4gICAgYGZvcmVjYXN0Lmpzb24/a2V5PSR7a2V5fSZxPSR7cGxhY2V9JmRheXM9M2AsXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhkYXRhSnNvbik7XHJcbiAgZGlzcGxheUZvcmVjYXN0V2VhdGhlcihkYXRhSnNvbik7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlcihxdWVyeSkge1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS8ke3F1ZXJ5fWApO1xyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgfVxyXG4gICAgbGV0IGRhdGFKc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIGRhdGFKc29uO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlUb2RheVdlYXRoZXIoZGF0YSkge1xyXG4gIGNvbnNvbGUudGFibGUoe1xyXG4gICAgTG9jYXRpb246IGRhdGEubG9jYXRpb24ubmFtZSxcclxuICAgIENvbmRpdGlvbjogZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LFxyXG4gICAgXCJMb2NhbCBUaW1lXCI6IGRhdGEubG9jYXRpb24ubG9jYWx0aW1lLFxyXG4gICAgVGVtcGVyYXR1cmU6IGAke2RhdGEuY3VycmVudC50ZW1wX2N9wrBDYCxcclxuICAgIEh1bWlkaXR5OiBgJHtkYXRhLmN1cnJlbnQuaHVtaWRpdHl9JWAsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlGb3JlY2FzdFdlYXRoZXIoZGF0YSkge1xyXG4gIGxldCBmb3JlY2FzdCA9IGRhdGEuZm9yZWNhc3Q7XHJcbiAgbGV0IGxvY2F0aW9uID0gZGF0YS5sb2NhdGlvbjtcclxuICBjb25zb2xlLnRhYmxlKHtcclxuICAgIFwiQXZlcmFnZSBUZW1wZXJhdHVyZVwiOiB7XHJcbiAgICAgIFtmb3JlY2FzdC5mb3JlY2FzdGRheVswXVxyXG4gICAgICAgIC5kYXRlXTogYCR7Zm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmF2Z3RlbXBfY33CsENgLFxyXG4gICAgICBbZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV1cclxuICAgICAgICAuZGF0ZV06IGAke2ZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5hdmd0ZW1wX2N9wrBDYCxcclxuICAgICAgW2ZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdXHJcbiAgICAgICAgLmRhdGVdOiBgJHtmb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuYXZndGVtcF9jfcKwQ2AsXHJcbiAgICB9LFxyXG4gICAgXCJDaGFuY2Ugb2YgcmFpblwiOiB7XHJcbiAgICAgIFtmb3JlY2FzdC5mb3JlY2FzdGRheVswXVxyXG4gICAgICAgIC5kYXRlXTogYCR7Zm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWlufSVgLFxyXG4gICAgICBbZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV1cclxuICAgICAgICAuZGF0ZV06IGAke2ZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbn0lYCxcclxuICAgICAgW2ZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdXHJcbiAgICAgICAgLmRhdGVdOiBgJHtmb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW59JWAsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcblxyXG5nZXRGb3JlY2FzdFdlYXRoZXIoXCJqYWthcnRhXCIpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=