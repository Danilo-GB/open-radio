const url = "https://radio-browser.p.rapidapi.com/json/stations";
const config = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "radio-browser.p.rapidapi.com",
    "x-rapidapi-key": "2bb11848demsha4bf7d07c97be5fp158204jsna5d9b3c4ed0f",
  },
};

function getStations(q) {
  return fetch(
    `${url}/search?name=${q
      .trim()
      .replace(" ", "%20")}&reverse=false&offset=0&limit=50&hidebroken=true`,
    config
  ).then((response) => response.json());
}

export default {
  getStations,
};
