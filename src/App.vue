<template>
  <r-loader v-if="isLoading" />
  <main class="flex flex-col-reverse h-screen overflow-hidden md:flex-row">
    <r-navigation class="h-1/6 md:w-1/6 md:h-screen md:fixed md:bottom-0" />
    <router-view class="h-5/6 md:w-5/6 md:h-screen content" />
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

<style>
.content {
  background: #2a2a2a;
}
</style>
