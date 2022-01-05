<template>
  <div class="flex flex-row justify-center">
    <div
      class="my-auto p-7 m-7 text-purple-900 rounded-lg w-full md:w-1/2 bg-white opacity-90 text-center"
    >
      <h1 class="text-xl md:text-4xl m-7">404</h1>
      <h1 class="text-xl md:text-4xl m-7">Oops, page not found.</h1>

      <router-link
        to="/"
        class="border-4 border-purple-700 rounded-lg py-1 px-3 hover:bg-purple-700 hover:text-white transition duration-200"
      >
        HOME
      </router-link>
    </div>
  </div>
</template>

<script>
import bus from "@/services/Stationbus";
export default {
  name: "NotFound",

  mounted() {
    bus.fire("isLoading", false); //global loading event
  },
};
</script>

<style></style>
