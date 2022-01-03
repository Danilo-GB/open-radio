<template>
  <div
    class="station w-1/2 h-52 md:h-52 md:w-1/3 text-white p-3"
    v-if="station.favicon && station.country"
  >
    <div class="h-1/5 flex flex-row justify-evenly mb-2">
      <!-- COUNTRY BADGE -->
      <div
        class="hidden md:inline-block lg:border-2 rounded-full py-1 px-4"
        v-if="station.country"
      >
        {{ station.country }}
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
      <div class="inline-block">
        <svg
          class="w-6 h-6"
          fill="none"
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
      <div class="inline-block">
        <svg
          class="w-6 h-6 inline-block lg:hidden"
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
      :src="station.favicon"
      alt="Oops, image not found."
      class="h-3/5 mx-auto text-center cursor-pointer"
      @click="changeStation"
    />
    <div class="h-1/5 pt-1 block text-center overflow-ellipsis">
      <!-- STATION NAME -->
      <div>
        {{ station.name }}
      </div>
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
  methods: {
    changeStation() {
      console.log("station changed");
      bus.fire("changeStation", this.station.url_resolved);
    },
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
