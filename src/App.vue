<template>
  <r-loader v-if="isLoading" />
  <main class="flex flex-col-reverse h-screen md:flex-row">
    <r-navigation
      class="h-1/6 w-full fixed bottom-0 md:w-1/6 md:h-screen md:relative"
    />
    <router-view
      class="content h-5/6 w-full fixed top-0 md:w-5/6 md:h-screen md:relative overflow-y-scroll"
      v-if="!isLoading"
    />
  </main>
</template>

<script>
import RLoader from "@/components/layout/Loader.vue";
import RNavigation from "@/components/layout/Navigation.vue";
import bus from "@/services/Stationbus";

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
  methods: {
    switchLoading(state) {
      this.isLoading = state;
    },
  },
  mounted() {
    bus.listen("isLoading", (state) => this.switchLoading(state));
  },
};
</script>
<style>
.content {
  background: #2a2a2a;
  background-image: url("./assets/global-background.jpg");
  background-size: cover;
}
</style>
