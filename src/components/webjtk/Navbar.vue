<template>
  <div>
    <div class="absolute z-10 w-full shadow-sm">
      <!-- Navbar -->

      <div class="flex header-color items-center px-4 py-3 sm:p-0">
        <a href="/">
          <img class="img-logo" src="/img/icons/geowisata/polban.png" />
        </a>
        <div class="sm:hidden">
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="
              block
              text-gray-500
              hover:text-white
              focus:text-white focus:outline-none
            "
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
        <a
          href="/"
          class="text-black font-montserrat font-semibold rounded px-8"
        >
          Jurusan Teknik Komputer dan Informatika POLBAN
        </a>
      </div>

      <div
        class="flex navbar-color items-center justify-between px-8 py-33 sm:p-0"
      >
        <nav
          :class="isOpen ? 'block' : 'hidden'"
          class="px-6 pt-2 pb-4 sm:flex sm:p-0"
        >
          <a
            href="#"
            class="
              dropdown
              relative
              inline-block
              mt-1
              block
              px-6
              py-1
              text-white
              font-montserrat font-semibold
              rounded
            "
          >
            <div class="dropbtn text-white hover:underline">Tentang JTK</div>
            <div class="dropdown-content absolute hidden">
              <a href="/major-profile">Jurusan</a>
              <a href="/struktur-organisasi">Struktur Organisasi</a>
              <a href="/sarana-prasarana">Sarana Prasarana</a>
              <a href="/achievement">Daftar Prestasi</a>
            </div>
          </a>
          <a
            href="#"
            class="
              dropdown
              relative
              inline-block
              mt-1
              block
              px-6
              py-1
              text-white
              font-montserrat font-semibold
              rounded
            "
          >
            <div class="dropbtn text-white hover:underline">Program Studi</div>
            <div class="dropdown-content absolute hidden">
              <a href="/d3-profile">D3 Teknik Informatika</a>
              <a href="/d4-profile">D4 Teknik Informatika</a>
            </div>
          </a>
          <a
            data-v-41458b80=""
            href="/#"
            class="
              navlist
              mt-1
              block
              px-6
              py-1
              text-white
              font-semibold font-montserrat
              rounded
              text-white
              hover:underline
            "
          >
            Partnership
          </a>
          <a
            data-v-41458b80=""
            href="/#"
            class="
              navlist
              mt-1
              block
              px-6
              py-1
              text-white
              font-semibold font-montserrat
              rounded
              text-white
              hover:underline
            "
          >
            Tracer Study
          </a>
          <a
            data-v-41458b80=""
            href="/#"
            class="
              navlist
              mt-1
              block
              px-6
              py-1
              text-white
              font-semibold font-montserrat
              rounded
              text-white
              hover:underline
            "
          >
            Kontak
          </a>
          <a data-v-41458b80="" href="/partnership" class="navlist mt-1 block px-6 py-1 text-white font-semibold font-montserrat rounded text-white hover:underline"> Partnership </a>
          <a data-v-41458b80="" href="/#" class="navlist mt-1 block px-6 py-1 text-white font-semibold font-montserrat rounded text-white hover:underline"> Tracer Study </a>
          <a data-v-41458b80="" href="/#" class="navlist mt-1 block px-6 py-1 text-white font-semibold font-montserrat rounded text-white hover:underline"> Kontak </a>
          <a
            v-for="(navbar, index) in navbarList.navbar_items"
            :href="navbar.navbar_link"
            :key="index"
            class="
              navlist
              mt-1
              block
              px-2
              py-1
              text-white
              font-semibold font-montserrat
              rounded
              text-white
              hover:underline
            "
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
  background-color: #9ea4aa;
  height: 96px;
}

.dropdown-content a:hover {
  text-decoration: underline;
}

.dropdown-content a {
  color: black;
  padding: 10px 10px;
  text-decoration: none;
  display: block;
  font-size: 14px;
}

.dropdown-content {
  background-color: #f1f1f1;
  min-width: 170px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block !important;
}

.navbar-color {
  background-color: rgb(26, 65, 103);
  /* background-color: rgba(255, 255, 255, 0); */
}

.header-color {
  background-color: white;
  font-size: 28px;
}

.img-logo {
  height: 150%;
  width: 150%;
  max-height: 175px;
  max-width: 250px;
}
</style>

<script lang="ts">
import Vue from "vue";
// import axios from "axios";

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
  // created() {
  //   this.fetchData();
  // },
  // methods: {
  //   async fetchData() {
  //     const navbarList = await axios.get(this.CMS_API + "/navigation-menu");
  //     const logoHeader = await axios.get(this.CMS_API + "/logo-header");
  //     this.navbarList = navbarList.data;
  //     this.logoHeader = logoHeader.data;
  //   },
  // },
});
</script>
