const key = "6104b68df4be4b02b7a52853231010";
async function getTodayWeather(place) {
  let dataJson = await fetchWeather(`current.json?key=${key}&q=${place}`);
  console.log(dataJson);
  displayTodayWeather(dataJson);
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
