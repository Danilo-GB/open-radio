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
    <!-- SEARCH RESULTS -->
    <div class="flex flex-col w-full" v-if="searchedQuery">
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
      searchedQuery: "",
      stations: [],
    };
  },
  methods: {
    getStations() {
      this.searchedQuery = this.query.trim();
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
      return Object.keys(this.stations).length.toString();
    },
  },
};
</script>

<style></style>
