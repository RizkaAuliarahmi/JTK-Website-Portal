<template>
  <div>
    <Navbar />
    <div class="mx-40 mt-0 py-72 place-self-start">
      <div class="grid grid-cols-4 gap-6 font-montserrat">
        <div class="col-span-1 start-cols-1 text-black">
          <p class="mt-4 font-bold text-2xl">Kontak Kami</p>
          <ion-icon name="mail"></ion-icon>
          <a class="text-xl text-black" href="#">jtk@polban.ac.id</a><br />
          <ion-icon name="call"></ion-icon
          ><a class="text-xl text-black" href="#">(022) 2013789</a><br />
          <ion-icon name="logo-facebook"></ion-icon
          ><a class="text-xl text-black" href="#">@jtkpolban </a>
          <table>
            <td><ion-icon name="location-sharp"></ion-icon></td>
            <td>
              <a
                class="text-xl text-black"
                href="https://goo.gl/maps/K7cSXA1BXkurawTN8"
              >
                <tr>
                  Jl. Gegerkalong Hilir, Ciwaruga, Kec. Parongpong, Kabupaten
                  Bandung Barat, Jawa Barat Kode Pos 40559 | Kotak Pos 1234
                </tr></a
              >
            </td>
          </table>
        </div>
        <div class="col-span-3 start-cols-2">
          <p class="-mt-12 font-bold text-2xl md:text-center">Pertanyaan</p>
          <form class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <input class="appearance-none outline-black block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Nama Lengkap">
              </div>
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input class="appearance-none outline-black block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="email" placeholder="Email">
              </div>
              <div class="w-full md:w-1/2 px-3">
                <input class="appearance-none outline-black block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-telp" type="text" placeholder="No. Telepepon (Operasional)">
              </div>
              <div class="w-full px-3">
                <textarea class="appearance-none outline-black block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-comment" type="textarea" placeholder="Pertanyaan Anda"></textarea>
              </div>
              <div class="flex justify-between mt-2">
                <button class="mx-4 px-4 h-12 w-[150px] bg-blue-400 text-sm text-white rounded-lg transition-all cursor-pointer hover:bg-blue-600">Kirim Pesan</button>
                <p class="text-sm text-blue-900">Enter atleast 15 characters</p>
              </div>
            </div>
          </form>
        </div>
      </div>
      </div>
    <Footer />
  </div>
</template>

<style scoped>
</style>

<script>
import Vue from "vue";
import Navbar from "../components/webjtk/Navbar.vue";
import Footer from "../components/webjtk/Footer.vue";

export default Vue.extend({
  components: {
    Navbar,
    Footer,
  },
  name: "Mitra Kami",

  methods: {},
});
</script>
