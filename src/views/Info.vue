<template>
  <div class="flex flex-row justify-center">
    <div
      class="my-auto p-7 text-purple-900 rounded-lg w-1/2 bg-white opacity-90"
    >
      <h1 class="text-xl md:text-4xl">
        Created with
        <svg
          class="w-7 h-7 inline-block"
          fill="#4c1d95"
          stroke="#4c1d95"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          ></path>
        </svg>
        by
        <a
          href="www.linkedin.com/in/danilogarciab"
          target="blank"
          class="underline hover:text-red-700"
          >Danilo Garcia</a
        >
      </h1>
      <p class="text-lg md:text-xl my-3">I hope you like it!</p>
      <div class="text-black opacity-80 text-md md:text-lg">
        <p class="mt-3">Services used:</p>
        <ul class="">
          <li>
            <a href="https://www.radio-browser.info/" target="blank">
              -Radio Browser API</a
            >
          </li>
          <li>-Background image by master1305</li>
        </ul>

        <p class="text-sm md:text-md my-3">
          Free web application, use it under your responsibility.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "@/services/Stationbus";
export default {
  name: "Info",

  mounted() {
    bus.fire("isLoading", false); //global loading event
  },
};
</script>

<style></style>
