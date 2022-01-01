<template>
  <r-loader v-if="isLoading" />
  <main class="flex flex-col-reverse h-screen md:flex-row">
    <r-navigation class="h-1/6 md:w-1/6 md:h-screen" />
    <router-view class="h-5/6 md:w-5/6 md:h-screen" />
  </main>
</template>

<script>
import RLoader from "@/components/layout/Loader.vue";
import RNavigation from "@/components/layout/Navigation.vue";

export default {
  components: {
    RLoader,
    RNavigation,
  },
  data() {
    return {
      isLoading: false,
    };
  },
};
</script>

<style></style>
