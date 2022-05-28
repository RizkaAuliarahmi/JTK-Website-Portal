<template>
  <div>
    <Navbar/>
    <BannerImage 
    title="Struktur Organisasi" 
    image="img/webjtk/banner.png"
    color="text-white"
    />
      <div class="mx-20 mt-8">
        <div class="grid grid-cols-4">
          <div class="col-span-4">
            <span class="font-semibold text-black items-center content-center self-center text-3xl justify-self-center font-montserrat text-center align-center">
              Manajemen Jurusan Teknik Komputer dan Informatika  Politeknik Negeri Bandung Tahun 2019 - 2023
            </span> 
          </div>
        </div>
        <div class=" flex mt-6 place-self-center">
          <img 
          class="w-full h-full" 
          src="img/webjtk/organigram-jtk-2015-v2.png"/>
        </div>

        <!-- gambar dan jabatann -->
        <div class="grid grid-cols-10">
          <div class="col-span-10 place-self-center mt-12">
            <span class="font-semibold font-montserrat text-2xl">
              Manajemen Jurusan Periode 2019-2023
            </span>
          </div>
          <div class="col-start-3 col-span-2 mt-4 back-color place-self-center">
            <img class="w-full h-4/5" src="img/webjtk/Rectangle.png"/>
            <div class="place-self-center" @click="goToDetail">
              <span class="font-semibold font-montserrat text-lg">Ketua Jurusan<br></span>
              <span class="font-medium font-montserrat text-lg">Bambang Wisnuadhi, S.Si., M.T. <br> 197201061999031002</span>
            </div>
          </div>
          <ProfilCard mulai_dari="col-start-7" jabatan="Sekretaris" nama="Ani Rahmani, S.Si., M.T." nip="196810141993032002" gambar="img/webjtk/Rectangle.png"/>
        </div>
      </div>
      <Footer/>
  </div>
</template>
<style scoped>
.back-color{
  background-color: #fcf6eb;
}
.check{
  background-color: aqua;
}
.w-572{
  width: 572px;
}

</style>

<script>
import Vue from "vue";
import BannerImage from "../components/webjtk/BannerImage.vue";
import ProfilCard from "../components/webjtk/ProfilCard.vue";
import Navbar from "../components/webjtk/Navbar.vue";
import Footer from "../components/webjtk/Footer.vue";

export default Vue.extend({
  components: {
    BannerImage, ProfilCard, Navbar, Footer
  },
  name: "StrukturOrganisasi",

  methods: {
      goToDetail(){
         this.$router.push({
         name: "ProfilPegawai",
         params: {},
         });
      },
      
    },
  
});

</script>
