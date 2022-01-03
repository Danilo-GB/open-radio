<template>
  <h1>favorites page</h1>
</template>

<script>
import bus from "@/services/Stationbus";
export default {
  name: "Favorites",
  data() {
    return {
      stations: [],
    };
  },
  created() {
    let favStations = JSON.parse(localStorage.getItem("fav-stations"));
    if (favStations) this.stations = favStations;
  },
};
</script>

<style></style>
