const url = "https://radio-browser.p.rapidapi.com/json/stations";
const config = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "radio-browser.p.rapidapi.com",
    "x-rapidapi-key": "Will fix it later",
  },
};

function getStations(q) {
  return fetch(
    `${url}/byname/${q.replace(
      " ",
      "%20"
    )}?reverse=false&offset=0&limit=100&hidebroken=true`,
    config
  ).then((response) => response.json());
}

function getTopFive() {
  const params =
    "&languageExact=true&order=votes&reverse=true&offset=0&limit=6&hidebroken=true";
  return Promise.all([
    fetch(`${url}/search?language=english${params}`, config),
    fetch(`${url}/search?language=spanish${params}`, config),
    fetch(`${url}/search?language=french${params}`, config),
    fetch(`${url}/search?language=russian${params}`, config),
    fetch(`${url}/search?language=portuguese${params}`, config),
    fetch(`${url}/search?language=german${params}`, config),
  ]).then(function (responses) {
    // Get a JSON object from each of the responses
    return Promise.all(
      responses.map(function (response) {
        return response.json();
      })
    );
  });
}

export default {
  getStations,
  getTopFive,
};
