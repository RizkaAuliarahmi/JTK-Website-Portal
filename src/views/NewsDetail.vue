<template>
  <div>
    <Navbar/>
    <BannerImage 
    title="" 
    image="img/webjtk/smb_open_house.jpeg"
    color=""
    />
      <div class="mx-40 mt-8">
        <div class="grid grid-cols-4">
          <div class="col-span-4">
            <span class="font-montserrat flex text-left mx-auto my-4 text-black">
              Terakhir diperbarui pada 1 Februari 2022 oleh HUMAS
            <br></span>
            <span class="font-semibold text-black items-center content-center self-center text-3xl justify-self-center font-montserrat text-center align-center">
              SOSIALISASI PENERIMAAN MAHASISWA BARU POLBAN SECARA HYBRID
            </span>
            <span class="font-montserrat flex text-justify mx-auto my-5 text-black">
              Humas - Politeknik Negeri Bandung yang diwakili
              oleh Panitia Seleksi Mahasiswa Baru (SMB) mengadakan acara Sosialisasi dan Promosi Penerimaan Mahasiswa Baru Tahun Akademik 2022/2023
              secara “Hybrid”. Acara sosialisasi dilaksanakan pada hari Jumat, 18 Februari 2022 di Gedung Pendopo Tonny Soewandito-Polban. Acara dibuka secara resmi oleh Direktur Polban, Dr. Ir. Rachmad
              Imbang Tritjahjono, MT., dan sebagai narasumber
              Prof. Dr. Ir. Noor Cholis Basjaruddin, MT. (Wakil
              Direktur Bidang Akademik) dan Dr. Ir. Windy Hermawan Mitrakusuma, MT., (Ketua Umum SMB) sebagai moderator Dra. Sri Dewiyanti, M.Ed. 
            <br></span>

            <img 
              class="mx-auto mt-12 mb-2" 
              src="img/webjtk/new2-detail-image.png"/>
            <span class="font-montserrat flex justify-center mx-auto mb-10 font-thin">
              Solusi Penerimaan Mahasiswa Baru<br>
            </span>

            <span class="font-montserrat flex text-justify mx-auto mt-5 mb-10 text-black">
              Karena situasi dan kondisi pandemi Covid-19, keterbatasantempat,
              dan kebijakan pelaksanaan protokol kesehatan untuk mencegah terjadinya kerumunan,
              panitia SMB Polban hanya mengundang lima puluh
              peserta perwakilan guru dari SMA/SMK/SLTA sederajat se-Bandung Raya untuk hadir
              secara langsung (luring) di Gedung Pendopo Tonny Soewandito.
              Untuk siswa SMA/SMK/SLTA sederajat lainnya
              yang tidak bisa menghadiri acara ini secara langsung di Polban, Panitia SMB Polban mengundang
              secara terbuka untuk umum dengan menyediakan
              fasilitas berupa tautan alamat (link address) atau
              melalui you tube streaming official Polban. Direktur
              Polban dalam sambutannya di hadapan para perwakilan guru-guru SLTA/SMK/MA mengatakan
              bahwa Polban sangat peduli akan kesehatan para
              pegawai dan mahasiswa. Untuk menjaga dan
              mencegah berkembangnya pandemi Covid-19, protokol kesehatan (prokes) dilaksanakan secara ketat.
              Selain itu, Polban juga telah memberikan vaksin
              bagi pegawai, mahasiswa dan masyarakat sekitar
              kampus sampai vaksin ke-3 (booster). Selanjutnya,
              Direktur  menyatakan bahwa Polban tidak hanya
              peduli dan ber usaha mencapai visi, dan misi, tetapi ada yang lebih penting, yaitu nilai (value) berupa
              kejujuran. Apabila ada mahasiswa yang berbuat
              curang dan masuk dalam penanganan komisi
              disiplin, yang bersangkutan akan diproses dan yang
              bersangkutan mungkin saja akan dikeluarkan dari
              Polban, demikian menurut Direktur. (ak)
            <br></span>
          </div>
        </div>
      </div>
    <Footer/>
  </div>
</template>

<style scoped>

</style>

<script>
import Vue from "vue";
import BannerImage from "../components/webjtk/BannerImage.vue";
import Navbar from "../components/webjtk/Navbar.vue";
import Footer from "../components/webjtk/Footer.vue";

export default Vue.extend({
  components: {
    BannerImage, Navbar, Footer
  },
  name: "NewsDetail",

  methods: {
    
    },
  
});

</script>
