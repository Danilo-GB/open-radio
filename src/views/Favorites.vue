<template>
  <div class="flex flex-col w-full">
    <div>
      <station-criteria
        :criteria="{
          searchedQuery:
            stations.length > 0
              ? 'MY FAVS'
              : 'ADD SOME STATIONS USING THE ♡ BUTTON',
        }"
      />
    </div>
    <div class="flex flex-row flex-wrap w-full">
      <station
        v-for="station in stations"
        :key="station.stationuuid"
        :station="station"
      />
    </div>
  </div>
</template>

<script>
import Station from "@/components/Station.vue";
import StationCriteria from "@/components/StationCriteria.vue";
import bus from "@/services/Stationbus";
export default {
  name: "Favorites",
  components: {
    Station,
    StationCriteria,
  },
  data() {
    return {
      stations: [],
    };
  },
  created() {
    bus.fire("isLoading", true);
    let favStations = JSON.parse(localStorage.getItem("fav-stations"));
    if (favStations) this.stations = favStations;
    bus.fire("isLoading", false);
  },
};
</script>

<style></style>
