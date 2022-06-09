<template>
  <div class="pb-20 geosite mt-20">
    <div class="text-center mb-5 mx-5">
      <div class="cols-start-1 cols-span-2">
        <h5 class="text-4xl font-medium font-montserrat">Berita</h5>
      </div>
    </div>
    <!-- News -->
    <div class="grid grid-cols-flow grid-cols-10 gap-4 mx-20 my-4">
      <div class="bg-news col-start-1 row-start-1 col-span-3 row-span-2">
        <img class="object-none w-full h-full" src="img/webjtk/news1.png" />
        <div class="relative flex justify-center items-center">
          <div class="main-news absolute bg-black bg-opacity-60 bg-size">
            <div class="mx-2 my-2">
              <a class="text-white text-xl font-montserrat" href="/news-detail">
                STUDI PETIK/STUDI PEMBELAJARAN TIM AKADEMIK UNIVERSITAS
                PATTIMURA AMBON KE POLITEKNIK NEGERI BANDUNG
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-news col-start-4 row-start-1 col-span-4 row-span-1">
        <img
          class="object-none w-full h-full"
          src="img/webjtk/smb_open_house.jpeg"
        />
        <div class="relative flex justify-center items-center">
          <div class="main-news absolute bg-black bg-opacity-60 bg-size">
            <div class="mx-2 my-2">
              <a class="text-white text-xl font-montserrat" href="/news-detail">
                SOSIALISASI PENERIMAAN MAHASISWA BARU POLBAN SECARA HYBRID
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-news col-start-4 row-start-2 col-span-4 row-span-1">
        <img class="object-none w-full h-full" src="img/webjtk/news3.png" />
        <div class="relative flex justify-center items-center">
          <div class="main-news absolute bg-black bg-opacity-60 bg-size">
            <div class="mx-2 my-2">
              <a class="text-white text-xl font-montserrat" href="/news-detail">
                KUNJUNGAN DIREKTUR POLITEKNIK ELEKTRONIKA NEGERI SURABAYA DAN
                ROMBONGAN KE TIM ZONA INTEGRITAS WILAYAH BEBAS KORUPSI POLBAN
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-news col-start-8 row-start-1 col-span-3 row-span-2">
        <img class="object-none w-full h-full" src="img/webjtk/news4.png" />
        <div class="relative flex justify-center items-center">
          <div class="main-news absolute bg-black bg-opacity-60 bg-size">
            <div class="mx-2 my-2">
              <a class="text-white text-xl font-montserrat" href="/news-detail">
                POLITEKNIK NEGERI BANDUNG MENJALIN HUBUNGAN KERJA SAMA DENGAN
                ANTARA DIGITAL MEDIA JAKARTA
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="">
        <a
          class="m-auto"
          v-for="(news, index) in news"
          :href="news.link"
          :key="index"
        >
          <div
            v-if="index < 4"
            class=""
          >
            <img class="" :src="news.img" />
            <span class="">{{ news.title }}</span>
          </div>
        </a>
      </div> -->
    </div>
    <v-layout align-center justify-center>
      <v-btn
        class="
          see-all-content-btn
          bg-yellow-500
          text-white
          hover:bg-yellow-300 hover:text-black
          py-5
          px-0
          border-b-4 border-gray-500
          hover:border-black-500
          rounded
        "
      >
        Lebih Banyak
      </v-btn>
    </v-layout>
  </div>
</template>

<style scoped>
.main-news {
  left: 0;
  right: 0;
  bottom: 0;
}

.main-news:hover {
  bottom: 0px;
}

.bg-news {
  background-color: #142e46;
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NewsLandingPage",
  // components: { },
  // name: "",

  // data() {
  //   return {
  //     news: ,
  //   };
  // },
});
</script>
