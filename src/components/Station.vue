<template>
  <div
    class="station h-52 w-full sm:w-1/2 md:h-56 md:w-1/3 text-white p-3 overflow-hidden"
    v-if="station.url_resolved"
  >
    <div class="h-1/5 flex flex-row justify-evenly mb-2">
      <!-- COUNTRY BADGE -->
      <div class="hidden md:inline-block lg:border-2 rounded-full py-1 px-4">
        <span v-if="station.country.length < 10">
          {{ station.country }}
        </span>
        <span v-else> ... </span>
      </div>

      <!-- VOTES BADGE -->
      <div class="hidden lg:inline-block">
        <svg
          class="w-6 h-6 inline-block"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          ></path>
        </svg>

        <span class="ml-2">
          {{ station.votes }}
        </span>
      </div>

      <!-- ADD TO FAVORITES BADGE -->
      <div class="inline-block cursor-pointer" @click="addToFavorites">
        <svg
          class="w-6 h-6 inline-block"
          :fill="isFav ? '#fff' : 'none'"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          ></path>
        </svg>
      </div>

      <!-- PLAY BADGE -->
      <div class="inline-block" @click="changeStation">
        <svg
          class="w-6 h-6 inline-block lg:hidden cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          ></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </div>
    </div>
    <!-- STATION IMAGE -->
    <img
      v-show="!imageLoading"
      :src="station.favicon"
      alt="Oops, image not found."
      class="h-3/5 mx-auto text-center cursor-pointer"
      @load="imageLoaded"
      @click="changeStation"
    />
    <svg
      v-if="imageLoading"
      class="w-20 h-3/5 mx-auto"
      fill="none"
      stroke="#000"
      opacity="0.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"
      ></path>
    </svg>
    <!-- STATION NAME -->
    <div class="h-1/5 pt-1 text-center text-sm">
      {{ station.name }}
    </div>
  </div>
</template>

<script>
import bus from "@/services/Stationbus";
export default {
  props: {
    station: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      isFav: false,
      imageLoading: true,
    };
  },
  methods: {
    changeStation() {
      bus.fire("changeStation", this.station.url_resolved, this.station.name);
    },
    addToFavorites() {
      let favStations = [];
      favStations = JSON.parse(localStorage.getItem("fav-stations")) || [];
      let idx = favStations.findIndex(
        (x) => x.stationuuid == this.station.stationuuid
      );
      //add new fav
      if (!this.isFav) {
        favStations.push(this.station);
        this.isFav = true;
      } else {
        if (idx > -1) {
          favStations.splice(idx, 1);
          this.isFav = false;
          idx = -1;
        }
      }

      localStorage.setItem("fav-stations", JSON.stringify(favStations));
    },
    imageLoaded() {
      this.imageLoading = false;
    },
  },
  created() {
    let favStations = [];
    favStations = JSON.parse(localStorage.getItem("fav-stations")) || [];
    // check if station is already in fav
    let idx = favStations.findIndex(
      (x) => x.stationuuid == this.station.stationuuid
    );
    this.isFav = idx === -1 ? false : true;
  },
};
</script>

<style>
.station {
  background: #007d9e;
  border: 2px solid #0497c0;
}
.play-button:hover {
  stroke: #800080;
  opacity: 0.8;
  cursor: pointer;
}
</style>
