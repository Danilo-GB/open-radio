<template>
  <nav class="flex flex-row items-center justify-start md:flex-col nav-bar">
    <!-- BRAND LOGO -->
    <div class="hidden md:block md:w-4/5 lg:w-3/5 my-10">
      <svg viewBox="0 0 285 170">
        <path
          class="brand-logo"
          id="brand-logo"
          d="M 39.30757,2.5450992 C 35.730628,2.4039088 37.992797,11.636638 38.744358,14.74842 c 1.130322,3.539529 -0.903745,6.175562 -4.890035,9.090516 -5.729724,3.72299 -7.197795,7.467154 -11.396454,13.636039 -5.012848,6.43818 -9.987808,12.856238 -14.4030906,19.713015 -4.5934843,4.366084 -4.6500664,12.260943 0.8482709,15.876682 4.9212007,4.78815 12.3046997,4.304623 15.1669597,-2.078209 3.975492,-6.042989 11.534159,-4.955104 17.859346,-5.127318 4.771213,-0.129902 13.114255,-10.344319 10.565168,-0.667258 -2.463467,6.782642 -6.815745,13.012854 -11.370973,18.32595 -6.982808,7.897076 -15.331889,15.123508 -19.140246,25.254913 -3.948283,8.4605 -6.479266,19.62753 -1.335576,27.41701 3.361888,5.09114 2.00864,14.36907 -4.865084,17.9241 -3.045334,1.16452 -13.0293933,-1.71492 -12.6545269,14.55226 l 75.9802509,0.0255 v 0.008 c 2.993211,0 4.503456,-0.004 7.070163,-0.006 l 17.390619,0.006 c -3e-5,-0.009 2e-5,-0.019 0,-0.0287 13.71678,-0.0392 16.01311,-0.11962 16.6931,-0.24154 0.82911,-0.14869 2.72738,-0.457 4.21852,-0.68477 11.9898,-1.83139 22.29412,-7.16379 31.35844,-16.22808 9.08687,-9.08689 14.21528,-18.9342 16.40273,-31.49433 0.68377,-3.9249 0.68621,-15.3883 0.004,-19.3733 -1.5891,-9.285604 -4.97599,-17.174717 -10.59122,-24.671043 -2.37617,-3.172173 -8.97291,-9.845012 -12.15448,-12.294623 C 142.18948,58.054361 133.40831,54.22309 124.57232,52.806465 123.00228,52.55473 113.27995,52.58907 103.16094,52.697672 100.16828,41.182746 93.854702,30.235007 85.052097,22.320753 76.857244,14.972997 66.225775,9.9498485 55.217158,8.568994 49.261495,8.5420057 44.805074,4.2897375 39.307562,2.5450992 Z M 260.87885,51.63229 c -1.49302,0.0022 -3.08568,0.0091 -4.7844,0.01646 -29.77487,0.1287 -29.71493,0.125403 -36.66836,1.817573 -9.38041,2.2828 -17.59564,6.765851 -25.03089,13.659924 -10.38024,9.624683 -16.21627,20.403895 -18.36948,33.926603 -0.66246,4.15921 -0.66704,13.74202 -0.008,17.89386 2.06479,13.01782 7.04455,22.76376 16.42078,32.13717 6.58997,6.58797 12.56671,10.53866 20.50821,13.55641 4.25746,1.61782 7.48104,2.38626 14.07079,3.35379 h 5.4e-4 c 1.88003,0.27606 8.61547,0.3668 29.34816,0.39497 26.90837,0.0364 26.90844,0.0364 26.90844,-31.41312 0,-31.44958 8e-5,-31.44974 -18.0292,-31.44974 -18.02929,0 -18.02921,2.3e-4 -18.02921,13.42052 0,13.4203 1.3e-4,13.41999 -8.10953,13.41999 -5.92459,0 -8.65844,-0.10504 -10.14581,-0.38962 -8.20596,-1.57007 -14.8411,-7.86669 -17.01691,-16.14848 -0.8535,-3.24726 -0.85628,-8.40355 -0.006,-11.63002 1.01266,-3.84435 2.56357,-6.571542 5.48935,-9.651623 2.55124,-2.685791 4.8151,-4.217802 8.09944,-5.481381 3.64794,-1.403519 3.87388,-1.413423 31.7884,-1.423694 25.95946,-0.0094 25.95985,-0.0092 25.95985,-18.060001 0,-16.922557 -8e-5,-17.980288 -22.39529,-17.949588 z M 109.09512,87.908357 c 7.721,0.002 10.17835,0.192607 12.53933,0.972485 6.45579,2.132477 12.28252,7.960835 14.47582,14.479538 1.17299,3.48621 1.2406,9.47175 0.15023,13.28463 -1.98346,6.93574 -7.84717,12.86616 -15.03267,15.20359 -1.78429,0.58043 -2.43696,0.62382 -10.91232,0.72936 -3.40301,0.0424 -5.52004,0.0669 -6.83872,-1.12112 -0.0353,-14.17341 -0.0704,-28.34684 -0.10565,-42.52026 1.1503,-1.023443 2.93682,-1.028959 5.72398,-1.028223 z"
        />
      </svg>
    </div>
    <!-- BRAND LOGO -->
    <!-- HOME PAGE --->
    <div class="w-1/5 md:w-full">
      <router-link to="/">
        <div class="logo-container">
          <svg
            class="w-full h-10"
            fill="none"
            stroke="rgba(255, 255, 255, 0.3)"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            ></path>
          </svg>
        </div>
      </router-link>
    </div>
    <!-- HOME PAGE --->
    <!-- SEARCH PAGE-->
    <div class="w-1/5 md:w-full">
      <router-link to="/search">
        <div class="logo-container">
          <svg
            class="w-full h-10"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
      </router-link>
    </div>
    <!-- SEARCH PAGE----->
    <!-- CURRENT SONG CONTROL FOR MOBILE-->
    <div class="w-1/5 md:w-full md:hidden">
      <a @click="CurrentSongControl">
        <div class="logo-container">
          <svg
            v-if="isPlaying"
            class="w-full h-10"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
            ></path>
          </svg>
          <svg
            v-else
            class="w-full h-10"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
      </a>
    </div>
    <!-- CURRENT SONG CONTROL FOR MOBILE-->
    <!-- FAVORITES PAGE-->
    <div class="w-1/5 md:w-full">
      <router-link to="favorites">
        <div class="logo-container">
          <svg
            class="w-full h-10"
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
        </div>
      </router-link>
    </div>
    <!-- FAVORITES PAGE-->
    <!-- INFO PAGE------->
    <div class="w-1/5 md:w-full">
      <router-link to="info">
        <div class="logo-container">
          <svg
            class="w-full h-10"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
      </router-link>
    </div>
    <!-- INFO PAGE------->
  </nav>
</template>
<script>
export default {
  data() {
    return {
      isPlaying: false,
    };
  },
};
</script>
<style scoped>
.brand-logo {
  fill: none;
  stroke-width: 3;
  stroke: #10b8c9;
  stroke-opacity: 0.8;
}
svg {
  fill: none;
  stroke: rgba(255, 255, 255, 0.3);
}
.nav-bar {
  background: #252525;
}
a:hover svg,
a.router-link-exact-active svg {
  stroke: #10b8c9;
}
@media (min-width: 768px) {
  .logo-container {
    padding: 1rem 0;
    margin: 1rem 0;
  }
  a.router-link-exact-active .logo-container {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-left: 3px solid #10b8c9;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
}
</style>
