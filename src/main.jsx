// Constants
const API_KEY = 'b90add97e8658958811faddd000ec8b5';
const ENDPOINT_GEOCODING = `http://api.openweathermap.org/geo/1.0/direct`;
const ENDPOINT_CURRENT_WEATHER = `https://api.openweathermap.org/data/2.5/weather`;

// Functions
const getCoordinates = async (apiKey, place, limit = 3) => {
  try {
    const res = await fetch(
      `${ENDPOINT_GEOCODING}?appid=${apiKey}&q=${place}&limit=${limit}`
    );
    const json = await (res.ok ? res.json() : Promise.reject(res));

    return json;
  } catch (error) {
    console.warn(error);
  }
};

const getCurrentWeather = async (
  apiKey,
  lat,
  lon,
  units = 'metric',
  lang = 'es'
) => {
  try {
    const res = await fetch(
      `${ENDPOINT_CURRENT_WEATHER}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}&lang=${lang}`
    );
    const json = await (res.ok ? res.json() : Promise.reject(res));

    return json;
  } catch (error) {
    console.warn(error);
  }
};

// Execution
const [firstMatch] = await getCoordinates(API_KEY, 'Puebla');
const { lat, lon } = firstMatch;

console.log(await getCurrentWeather(API_KEY, lat, lon, 'metric', 'es'));
