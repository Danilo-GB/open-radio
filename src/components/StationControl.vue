<template>
  <div class="block mx-auto text-white text-center text-xs tex md:text-base">
    <audio
      :src="StationUrl"
      :onloadstart="OnLoadStation"
      :onplay="OnPlayStation"
      :onerror="OnError"
      :volume="StationVolume"
      autoplay
    ></audio>
    <div v-if="isPlaying">
      <svg
        @click="switchStationSate"
        class="w-8 h-8 mx-auto mb-3"
        fill="none"
        stroke="#f00"
        opacity="0.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
        ></path>
      </svg>

      <svg
        class="w-6 h-6 inline-block animate-pulse"
        fill="none"
        stroke="#f00"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
        ></path>
      </svg>
      <span> En directo</span>
      <span class="block my-1.5 h-8 md:h-10 overflow-hidden border-2s">
        {{ StationName }}
      </span>
      <input
        type="range"
        id="volume-slider"
        min="0"
        max="1"
        step="0.1"
        v-model="StationVolume"
        class="hidden md:block md:w-6/12 h-2 appearance-none bg-gray-700 rounded-lg overflow-hidden cursor-pointer mx-auto mt-3"
      />
    </div>
    <div v-else-if="isLoading">
      <svg
        class="w-full h-8 md:h-10 animate-spin mb-2"
        fill="none"
        stroke="#10b8c9"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
        ></path>
      </svg>
      <span class="block my-1.5 h-8 md:h-10 overflow-hidden border-2s">
        Loading {{ StationName }}
      </span>
    </div>
    <div v-else>
      <svg
        class="w-full h-8 md:h-10"
        fill="none"
        stroke="#fff"
        opacity="0.3"
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
</template>
<script>
import bus from "@/services/Stationbus";
export default {
  data() {
    return {
      StationUrl: "",
      StationName: "",
      StationVolume: 0.9,
      isPlaying: false,
      isLoading: false,
      hasError: false,
    };
  },
  methods: {
    newStation(url, name) {
      if (url && name) {
        this.StationUrl = url;
        this.StationName = name;
      } else {
        this.hasError = true;
      }
    },
    switchStationSate() {
      this.StationUrl = "";
      this.StationName = "";
    },
    OnLoadStation() {
      this.isLoading = true;
      this.isPlaying = false;
      this.hasError = false;
    },
    OnPlayStation() {
      this.isPlaying = true;
      this.isLoading = false;
      this.hasError = false;
    },
    OnError() {
      this.hasError = true;
      this.isLoading = false;
      this.isPlaying = false;
    },
  },

  mounted() {
    bus.listen("changeStation", (url, name) => this.newStation(url, name));
  },
};
</script>

<style></style>
