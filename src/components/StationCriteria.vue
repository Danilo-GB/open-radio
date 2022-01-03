<template>
  <div
    class="w-full h-32 md:h-32 bg-blue-800 bg-opacity-90 text-white p-10 text-md md:text-3xl"
  >
    <div class="mb-2" v-if="criteria.mode == 'search'">
      {{ criteria.ResultSize }} Stations found for:
      {{ criteria.searchedQuery }}
    </div>
    <div class="mb-2 text-center" v-else>
      TOP 6 IN {{ criteria.searchedQuery.toUpperCase() }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    criteria: {
      type: Object,
      default: { searchedQuery: "0", ResultSize: "0", mode: "static" },
    },
  },
};
</script>
