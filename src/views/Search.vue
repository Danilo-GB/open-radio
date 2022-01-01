<template>
  <div>
    <station />
    <station-criteria />
    <button class="border-2 text-white" @click="getStations">
      get stations
    </button>
  </div>
</template>

<script>
import RadioBrowser from "@/services/RadioBrowser.js";
import Station from "@/components/Station.vue";
import StationCriteria from "@/components/StationCriteria.vue";
import StationCriteria from "../components/StationCriteria.vue";
export default {
  name: "Search",
  components: {
    StationCriteria,
    Station,
  },
  data() {
    return {
      query: "los 40 c",
      res: {},
    };
  },
  methods: {
    getStations() {
      RadioBrowser.getStations(this.query).then(
        (stations) => (this.res = stations)
      );
    },
  },
  mounted() {
    this.getStations;
  },
};
</script>

<style></style>
