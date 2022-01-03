<template>
  <div
    class="criteria w-full h-32 md:h-52 bg-gray-500 bg-opacity-80 text-white text-center p-10 text-md md:text-3xl"
  >
    <div class="mb-2">{{ criteria.ResultSize }} Stations found for:</div>
    {{ criteria.searchedStation }}
  </div>
</template>

<script>
export default {
  props: {
    criteria: {
      type: Object,
      default: { searchedStation: "0", ResultSize: "0" },
    },
  },
};
</script>

<style scoped>
.criteria {
  animation-name: opening;
  animation-duration: 1s;
}

@keyframes opening {
  0% {
    transform: scale(0, 1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
