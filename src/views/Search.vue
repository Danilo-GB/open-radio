<template>
  <div>
    <!-- SEARCH BAR -->
    <div class="flex items-center justify-center h-1/2">
      <input
        type="text"
        placeholder="♪♪ Type the station name ♪♪"
        v-model="query"
        @keyup.enter="getStations"
        class="w-3/4 md:w-1/2 h-12 bg-gray-500 bg-opacity-50 text-white placeholder-white px-6 focus:outline-none border-2 hover:border-purple-500 focus:border-purple-500 transition duration-200"
      />
      <button
        @click="getStations"
        class="h-12 bg-blue-400 bg-opacity-70 w-12 hover:bg-purple-500 transition duration-200"
      >
        <svg
          class="w-6 h-6 mx-auto"
          fill="none"
          stroke="#fff"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </button>
    </div>
    <!-- LOCAL LOADER -->
    <div class="flex items-center justify-center" v-if="isLoading">
      <div
        class="w-28 h-28 border-b-4 border-white rounded-full animate-spin"
      ></div>
    </div>
    <!-- SEARCH RESULTS -->
    <div class="flex flex-col w-full" v-else-if="!isLoading && searchedQuery">
      <div>
        <station-criteria
          :criteria="{ searchedQuery, ResultSize, mode: 'search' }"
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
  </div>
</template>

<script>
import RadioBrowser from "@/services/RadioBrowser.js";
import Station from "@/components/Station.vue";
import StationCriteria from "@/components/StationCriteria.vue";
import bus from "@/services/Stationbus";
export default {
  name: "Search",
  components: {
    StationCriteria,
    Station,
  },
  data() {
    return {
      isLoading: false,
      query: "",
      searchedQuery: "",
      stations: [],
    };
  },
  methods: {
    getStations() {
      this.searchedQuery = this.query.trim();
      this.isLoading = true;
      if (this.searchedQuery) {
        RadioBrowser.getStations(this.searchedQuery).then(
          (stations) => (this.stations = stations)
        );
      }
      this.query = "";
    },
  },
  computed: {
    ResultSize: function () {
      const size = Object.keys(this.stations).length.toString();
      return size;
    },
  },
  watch: {
    stations(newVal) {
      if (newVal) this.isLoading = false;
    },
  },
  mounted() {
    bus.fire("isLoading", false); //global loading event
  },
};
</script>

<style></style>
