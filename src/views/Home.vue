<template>
  <div class="flex flex-col w-full">
    <div v-for="(list, index) in topsList" :key="index">
      <station-criteria
        :criteria="{
          searchedQuery: list[0].language,
        }"
      />
      <div class="flex flex-row flex-wrap">
        <station
          v-for="station in list"
          :key="station.stationuuid"
          :station="station"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Station from "@/components/Station.vue";
import StationCriteria from "@/components/StationCriteria.vue";
import RadioBrowser from "@/services/RadioBrowser";
import bus from "@/services/Stationbus";

export default {
  name: "Home",

  components: {
    StationCriteria,
    Station,
  },
  data() {
    return {
      topsList: [],
    };
  },
  watch: {
    topsList(newVal) {
      if (newVal.length > 0) bus.fire("isLoading", false);
    },
  },
  created() {
    bus.fire("isLoading", true);
    RadioBrowser.getTopFive().then((Lists) => (this.topsList = Lists));
  },
};
</script>

<style scoped></style>
