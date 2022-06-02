<template>
  <div id="footer">
    <footer class="w-full bottom-0 bg-navy-blue px-15 py-10">
      <div class="grid grid-cols-4 gap-4 font-montserrat">
        <div class="cols-start-1 cols-span-1">
          <img class="max-h-50 max-w-50" src="/img/webjtk/logo polban.png" />
        </div>
        <div class="cols-start-2 cols-span-1 text-white ml-5">
          <p class="mt-4 font-bold text-2xl">Tautan</p>
          <a
            href="https://e-learning.polban.ac.id/"
            class="text-xl color-darkgray2"
          >
            &gt; E-Learning
          </a>
          <br />
          <a
            href="https://www.polban.ac.id/peta-situs/"
            class="text-xl color-darkgray2"
          >
            &gt; Peta Situs
          </a>
        </div>

        <div class="cols-start-3 cols-span-1 text-white ml-5">
          <p class="mt-4 font-bold text-2xl">Dukungan</p>
          <a
            href="https://akademik.polban.ac.id/"
            class="text-xl color-darkgray2"
          >
            &gt; Akademik
          </a>
        </div>

        <div class="cols-start-4 cols-span-1 text-white">
          <p class="mt-4 font-bold text-2xl">Hubungi Kami</p>
          <table>
            <td><ion-icon name="location-sharp"></ion-icon></td>
            <td>
              <a
                class="text-xl color-darkgray2"
                href="https://goo.gl/maps/K7cSXA1BXkurawTN8"
              >
                <tr>
                  Jl. Gegerkalong Hilir, Ciwaruga, Kec. Parongpong, Kabupaten
                  Bandung Barat, Jawa Barat Kode Pos 40559 | Kotak Pos 1234
                </tr></a
              >
            </td>
          </table>
          <ion-icon name="mail"></ion-icon>
          <a class="text-xl color-darkgray2" href="#">jtk@polban.ac.id</a><br />
          <ion-icon name="call"></ion-icon
          ><a class="text-xl color-darkgray2" href="#">(022) 2013789</a><br />
          <ion-icon name="logo-facebook"></ion-icon
          ><a class="text-xl color-darkgray2" href="#">@jtkpolban </a>
        </div>
      </div>
    </footer>

    <div class="flex bottom-0">
      <div class="w-full bottom-0 top-0 bg-black my-0 mx-0 max-h-6">
        <p class="text-center color-darkgray2">© 3B Kel 3. 2022. We love u!</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
footer {
  height: 482px;
}

.bg-navy-blue {
  background-color: #142e46;
}

ion-icon {
  font-size: 22px;
  padding-right: 12px;
}
</style>

<script lang="ts">
import Vue from "vue";
// import axios from "axios";

export default Vue.extend({
  name: "Footer",

  data() {
    return {
      CMS_API: process.env.VUE_APP_CMS_API,
      footerData: [],
      isOpen: false,
      state: "close",
    };
  },
  // async created() {
  //   await this.fetchData();
  // },
  // methods: {
  //   async fetchData() {
  //     const footerData = await axios.get(this.CMS_API + "/footer");
  //     this.footerData = footerData.data;
  //   },
  // },
});
</script>
