<template>
  <div>
    <div class="absolute navbar-transparent z-10 w-full shadow-sm">
      <!-- Navbar -->
      <div class="flex items-center justify-between px-4 py-3 sm:p-0">
        <a href="/">
          <img class="img-logo" src="/img/icons/geowisata/logo-white.png" />
        </a>
        <div class="sm:hidden">
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
          >
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                v-if="isOpen"
                fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
              <path
                v-if="!isOpen"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>

        <nav
          :class="isOpen ? 'block' : 'hidden'"
          class="px-2 pt-2 pb-4 sm:flex sm:p-0"
        >
          <a
            href="#"
            class="dropdown relative inline-block mt-1 block px-2 py-1 text-white font-lato font-semibold rounded"
          >
            <div class="dropbtn text-white hover:underline">Dropdown</div>
            <div class="dropdown-content absolute hidden">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </a>
          <a
            v-for="(navbar, index) in navbarList.navbar_items"
            :href="navbar.navbar_link"
            :key="index"
            class="navlist mt-1 block px-2 py-1 text-white font-semibold font-lato rounded text-white hover:underline"
          >
            {{ navbar.navbar_title }}
          </a>
        </nav>
      </div>
    </div>
    <div v-if="isTransparent === false" class="bg-header"></div>
  </div>
</template>

<style scoped>
.bg-header {
  background-color: #142e46;
  height: 96px;
}

.dropdown-content a:hover {
  text-decoration: underline;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content {
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block !important;
}

.navbar-transparent {
  background-color: rgba(255, 255, 255, 0);
}

.img-logo {
  height: auto;
  width: auto;
  max-height: 72px;
  max-width: 250px;
}
</style>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  name: "Navbar",
  props: ["isTransparent"],

  data() {
    return {
      CMS_API: process.env.VUE_APP_CMS_API,
      navbarList: [],
      logoHeader: [],
      isOpen: false,
      state: "close",
      scrollPosition: 0,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const navbarList = await axios.get(this.CMS_API + "/navigation-menu");
      const logoHeader = await axios.get(this.CMS_API + "/logo-header");
      this.navbarList = navbarList.data;
      this.logoHeader = logoHeader.data;
    },
  },
});
</script>
