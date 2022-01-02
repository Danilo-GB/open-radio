<template>
  <div class="h-full overflow-y-scroll search">
    <div class="flex items-center justify-center h-1/2">
      <input
        type="text"
        placeholder="♪♪ Type the station name ♪♪"
        class="w-3/4 md:w-1/2 h-12 bg-gray-500 bg-opacity-50 text-white placeholder-white px-6 focus:outline-none border-2 hover:border-purple-500 focus:border-purple-500 transition duration-200"
      />
    </div>
    <div class="flex flex-cols flex-wrap w-full" v-if="dataLoaded">
      <div class="flex flex-row w-1/3 md:w-1/4">
        <station-criteria criteria="TOP TEN" />
      </div>
      <div class="flex flex-row flex-wrap w-2/3 md:w-3/4">
        <station />
        <station />
        <station />
        <station />
        <station />
      </div>
    </div>
  </div>
</template>

<script>
import RadioBrowser from "@/services/RadioBrowser.js";
import Station from "@/components/Station.vue";
import StationCriteria from "@/components/StationCriteria.vue";
export default {
  name: "Search",
  components: {
    StationCriteria,
    Station,
  },
  data() {
    return {
      dataLoaded: true,
      query: "",
      stations: {},
    };
  },
  methods: {
    getStations() {
      RadioBrowser.getStations(this.query).then(
        (stations) => (this.stations = stations)
      );
    },
  },
};
</script>

<style>
.search {
  background-image: url("../assets/global-background.jpg");
  background-size: cover;
}
</style>
