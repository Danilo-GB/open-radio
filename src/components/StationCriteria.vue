<template>
  <div class="criteria w-full h-32 md:h-52 text-white p-10 text-md md:text-xl">
    {{ criteria }}
  </div>
</template>

<script>
export default {
  props: {
    criteria: String,
  },
};
</script>

<style scoped>
.criteria {
  background: #252525;
}
</style>
