<template>
  <div id="footer">
    <footer class="w-full bottom-0 bg-navy-blue px-15 py-10">
      <div
        class="mx-3 flex text-sm font-montserrat text-white"
      >
        <!-- NAME AND ADDRESS -->
        <div class="px-5 w-11/12 2xl:w-5/12">
          <!-- POLBAN -->
          <div class="flex mb2">
            <div>
              <img
                class="max-h-38 max-w-38"
                src="/img/webjtk/logo polban.png"
              />
            </div>
            <div class="width pl-5 ml-4">
              <p class="mt-3 font-bold text-2xl">Tautan</p>
              <a href="https://e-learning.polban.ac.id/" class="text-xl color-darkgray2">
                &gt; E-Learning
              </a>
              <br />
              <a href="https://www.polban.ac.id/peta-situs/" class="text-xl color-darkgray2">
                &gt; Peta Situs
              </a>
            </div>
          </div>
        </div>

        <div class="ml-auto w-1/2 2xl:w-2/3 pl-20">
          <p class="font-bold text-2xl mt-3 mr-5">
            Dukungan
          </p>
          <a href="https://akademik.polban.ac.id/" class="text-justify text-xl color-darkgray2 mr-5">
            &gt; Akademik
          </a>
        </div>

        <div class="flex">
          <!-- CONNECT WITH US -->
          <div class="2xl:ml-2 text-left w-2/2 ">
            <p class="mt-3 font-bold text-2xl mb-0">Hubungi Kami</p>
            <br />
            <table>
              <td><ion-icon name="location-sharp"></ion-icon
              ></td>
              <td><a class="text-xl color-darkgray2" href="https://goo.gl/maps/K7cSXA1BXkurawTN8">
                <tr>Jl. Gegerkalong Hilir, Ciwaruga,
                    Kec. Parongpong, Kabupaten
                    Bandung Barat, Jawa Barat
                    Kode Pos 40559 | Kotak Pos 1234
                </tr></a
              ></td>
            </table>
            <ion-icon name="mail"></ion-icon>
            <a class="text-xl color-darkgray2" href="#">jtk@polban.ac.id</a
            ><br />
            <ion-icon name="call"></ion-icon
            ><a class="text-xl color-darkgray2" href="#">(022) 2013789</a
            ><br />
            <ion-icon name="logo-facebook"></ion-icon
            ><a class="text-xl color-darkgray2" href="#">@jtkpolban </a>
          </div>
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
.country {
  margin-top: 2px;
  margin-left: 5px;
}

footer {
  height: 482px;
}

.tab1 {
  tab-size: 6;
}

.bg-navy-blue {
  background-color: #142e46;
}

.geo-name {
  color: rgba(0, 180, 167, 1);
}
.check{
  background-color: aqua;
}
ion-icon {
  font-size: 22px;
  padding-right: 12px;
}
.width{
  width: 500px;
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
