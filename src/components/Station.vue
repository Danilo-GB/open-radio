<template>
  <div class="bg-gray-700 w-1/2 h-32 md:h-52 md:w-1/3 text-white station">
    {{ station.name }}
    <img :src="station.favicon" :alt="station.name" />
  </div>
</template>

<script>
export default {
  props: {
    station: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style>
/* 
.station{
  background-image: url();
} */
</style>
