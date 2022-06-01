<template>
  <div>
    <Navbar />
    <BannerImage
      :title="nip - title"
      :image="image"
      color="text-white"
    />

    <!-- biodata -->
    <div
      class="border-solid border-2 border-black mx-20 mt-8"
      v-if="employeeDataObject"
    >
      <div class="bg-orange mx-3 mt-3 h-11 place-items-bottom">
        <h2 class="text-xl font-bold font-montserrat py-3 pl-3 align-center">
          Biodata
        </h2>
      </div>
      <div class="grid grid-cols-10 my-11 mx-3">
        <!-- gambar -->
        <div class="col-start-2 col-span-2 row-span-7">
          <img src="img/webjtk/Rectangle.png" />
        </div>
        <!-- isi biodata -->
        <div class="col-start-4 col-span-2 place-self-end">
          <h2
            class="text-base font-medium font-montserrat py-3 pl-3 text-right"
          >
            Nama
          </h2>
          <h2
            class="text-base font-medium font-montserrat py-3 pl-3 text-right"
          >
            Jenis Kelamin
          </h2>
          <h2
            class="text-base font-medium font-montserrat py-3 pl-3 text-right"
          >
            Jabatan Fungsional
          </h2>
          <h2
            class="text-base font-medium font-montserrat py-3 pl-3 text-right"
          >
            Pendidikan Tertinggi
          </h2>
          <h2
            class="text-base font-medium font-montserrat py-3 pl-3 text-right"
          >
            Status Ikatan Kerja
          </h2>
          <h2
            class="text-base font-medium font-montserrat py-3 pl-3 text-right"
          >
            Status Aktivitas
          </h2>
          <h2
            class="text-base font-medium font-montserrat py-3 pl-3 text-right"
          >
            Kontak
          </h2>
        </div>
        <div class="col-start-6 gap-0 place-self-center">
          <h2
            class="text-base font-medium font-montserrat py-3 pl-3 text-center"
          >
            :
          </h2>
          <h2
            class="text-base font-medium font-montserrat py-3 pl-3 text-center"
          >
            :
          </h2>
          <h2
            class="text-base font-medium font-montserrat py-3 pl-3 text-center"
          >
            :
          </h2>
          <h2
            class="text-base font-medium font-montserrat py-3 pl-3 text-center"
          >
            :
          </h2>
          <h2
            class="text-base font-medium font-montserrat py-3 pl-3 text-center"
          >
            :
          </h2>
          <h2
            class="text-base font-medium font-montserrat py-3 pl-3 text-center"
          >
            :
          </h2>
          <h2
            class="text-base font-medium font-montserrat py-3 pl-3 text-center"
          >
            :
          </h2>
        </div>
        <div class="col-start-7 row-start-1 col-span-3 place-self-start">
          <h2 class="text-base font-medium font-montserrat py-3 pl-3 text-left">
            {{ employeeDataObject.name }}
          </h2>
          <h2 class="text-base font-medium font-montserrat py-3 pl-3 text-left">
            {{ employeeDataObject.gender }}
          </h2>
          <h2 class="text-base font-medium font-montserrat py-3 pl-3 text-left">
            {{ employeeDataObject.functional_occupation }}
          </h2>
          <h2 class="text-base font-medium font-montserrat py-3 pl-3 text-left">
            {{ employeeDataObject.education_level }}
          </h2>
          <h2 class="text-base font-medium font-montserrat py-3 pl-3 text-left">
            {{ employeeDataObject.employment_status }}
          </h2>
          <h2 class="text-base font-medium font-montserrat py-3 pl-3 text-left">
            {{ employment_status.status }}
          </h2>
          <h2 class="text-base font-medium font-montserrat py-3 pl-3 text-left">
            {{ employeeDataObject.contact }}
          </h2>
        </div>
      </div>
    </div>

    <!-- other information -->
    <div class="border-solid border-2 border-black mx-20 mt-8">
      <div class="bg-orange mx-3 mt-3 h-11 place-items-bottom">
        <h2 class="text-xl font-bold font-montserrat py-3 pl-3 align-center">
          Informasi Lainnya
        </h2>
      </div>
      <div class="grid grid-cols-10 my-11">
        <!-- isi kolom yg kiri -->
        <div class="col-start-2 col-span-3">
          <div>
            <h2
              class="text-xl font-bold font-montserrat py-3 pl-3 align-center"
            >
              Program studi
            </h2>
            <div class="ml-4">
              <ul class="list-disc" id="prodi"></ul>
            </div>
          </div>
          <div class="mt-4">
            <h2
              class="text-xl font-bold font-montserrat py-3 pl-3 align-center"
            >
              Expertise
            </h2>
            <div class="ml-4">
              <ul class="list-disc" id="expertise"></ul>
            </div>
          </div>
          <div class="mt-4">
            <h2
              class="text-xl font-bold font-montserrat py-3 pl-3 align-center"
            >
              KBK
            </h2>
            <div class="ml-4">
              <ul class="list-disc" id="community_service"></ul>
            </div>
          </div>
          <div class="mt-4">
            <h2
              class="text-xl font-bold font-montserrat py-3 pl-3 align-center"
            >
              Mata kuliah yang diampu
            </h2>
            <div class="ml-4">
              <ul class="list-disc" id="matakuliah"></ul>
            </div>
          </div>
        </div>
        <div class="col-start-6 col-span-5 gap-0">
          <h2 class="text-xl font-bold font-montserrat py-3 pl-3 align-center">
            Pengalaman
          </h2>
          <div class="ml-8">
            <h2
              class="text-lg font-bold font-montserrat py-3 pl-3 align-center"
            >
              Produk / Proyek
            </h2>
            <div class="ml-4">
              <ul class="list-disc" id="proyek"></ul>
            </div>
            <h2
              class="text-lg font-bold font-montserrat py-3 pl-3 align-center"
            >
              Penelitian
            </h2>
            <div class="ml-4">
              <ul class="list-disc" id="penelitian"></ul>
            </div>
            <h2
              class="text-lg font-bold font-montserrat py-3 pl-3 align-center"
            >
              Pengabdian kepada masyarakat
            </h2>
            <div class="ml-4">
              <ul class="list-disc" id="pkm"></ul>
            </div>
            <h2
              class="text-lg font-bold font-montserrat py-3 pl-3 align-center"
            >
              Prestasi / Penghargaan
            </h2>
            <div class="ml-4">
              <ul class="list-disc indent-1" id="prestasi"></ul>
            </div>
          </div>
          <h2
            class="
              text-xl
              font-bold font-montserrat
              py-3
              pl-3
              align-center
              mt-4
            "
          >
            Daftar Publikasi Karya Ilmiah
          </h2>
          <div class="ml-4">
            <ul class="list-disc" id="publikasi"></ul>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.bg-orange {
  background-color: #f39c12;
}
</style>

<script>
import Vue from "vue";
import BannerImage from "../components/webjtk/landing-page/BannerImage.vue";
import Navbar from "../components/webjtk/Navbar.vue";
import Footer from "../components/webjtk/Footer.vue";
import axios from "axios";
export default Vue.extend({
  components: {
    BannerImage,
    Navbar,
    Footer,
  },
  name: "EmployeeProfile",
  data() {
    return {
      employeeDataObject: [
        {
          name: "",
          functional_occupation: "",
          gender: "",
          education_level: "",
          employment_status: "",
          status: "",
        },
      ],
      mataKuliah: "",
      listMataKuliah: [],
      name: "",
      functional_occupation: "",
      gender: "",
      education_level: "",
      employment_status: "",
      status: "",
      i: 0,
      image:'',
      title:'',
      nip:''
          };
  },
  async created() {
    await this.fetchData();
  },

  methods: {
    async fetchData() {
      const employeeData = await axios
        .get("https://cms-jtk-polban.herokuapp.com/tests/" + this.$route.params.id)
        .then((response) => {

          this.employeeDataObject = response.data;
          this.image = response.data.metadata[0].banner_image.url
          this.title = response.data.title
          this.nip = response.data.nip
          this.mataKuliah = response.data.lecturers[0].subjects;
          var listmataKuliah = this.mataKuliah;
          var ul1 = document.getElementById("matakuliah");
          
          if (String(this.mataKuliah).includes(";")) {
            listmataKuliah = this.mataKuliah.split(";");
            for (this.i = 0; this.i < listmataKuliah.length; this.i++) {
              var li1 = document.createElement("li");
              li1.appendChild(document.createTextNode(listmataKuliah[this.i]));
              ul1.appendChild(li1);
            }
          } else {
            li1.appendChild(document.createTextNode(listmataKuliah));
            ul1.appendChild(li1);
          }

          this.kbk = response.data.lecturers[0].kbk;
          var listkbk = this.kbk;
          var ul2 = document.getElementById("kbk");
          if (String(this.kbk).includes(";")) {
            listkbk = this.kbk.split(";");
            for (this.i = 0; this.i < listkbk.length; this.i++) {
                var li2 = document.createElement("li");
                li2.appendChild(document.createTextNode(listkbk[this.i]));
                ul2.appendChild(li2);
            } 
          } else {
            li2.appendChild(document.createTextNode(listmataKuliah));
            ul1.appendChild(li2);
          }

          this.expertise = response.data.lecturers[0].expertise;
          var listexpertise = this.expertise; 
          var ul3 = document.getElementById("expertise"); 
          if (String(this.expertise).includes(";")) {
            listexpertise = this.expertise.split(";");
            for (this.i = 0; this.i < listexpertise.length; this.i++) { 
                var li3 = document.createElement("li");
                li3.appendChild(document.createTextNode(listkbk[this.i]));
                ul3.appendChild(li3);
            }
          } else {
            li3.appendChild(document.createTextNode(listmataKuliah));
            ul1.appendChild(li3);
          }


          this.products = response.data.lecturers[0].products;
          var listproducts = this.products; 
          var ul4 = document.getElementById("produk");
          if (String(this.products).includes(";")) {
            listproducts = this.products.split(";");    
            for (this.i = 0; this.i < listproducts.length; this.i++) {
                var li4 = document.createElement("li");
                li4.appendChild(document.createTextNode(listproducts[this.i]));
                ul4.appendChild(li4);
            } 
          } else {
            li4.appendChild(document.createTextNode(listmataKuliah));
            ul4.appendChild(li4);
          }

          this.researcher = response.data.lecturers[0].researcher;
          var listresearcher = this.researcher;
          var ul5 = document.getElementById("penelitian");
          
          if (String(this.researcher).includes(";")) {
            listresearcher = this.researcher.split(";");
            for (this.i = 0; this.i < listresearcher.length; this.i++) {
              var li5 = document.createElement("li");
              li5.appendChild(document.createTextNode(listresearcher[this.i]));
              ul5.appendChild(li5);
            }
          } else {
            var lii5 = document.createElement("li");
            lii5.appendChild(document.createTextNode(listresearcher));
            ul5.appendChild(lii5);
          }

          this.community_service = response.data.lecturers[0].community_service;
          var listcommunity_service = this.community_service; 
          var ul6 = document.getElementById("community_service");
          if (String(this.community_service).includes(";")) {
            listcommunity_service = this.community_service.split(";");
            for (this.i = 0; this.i < listcommunity_service.length; this.i++) {
                var li6 = document.createElement("li");
                li6.appendChild(document.createTextNode(listcommunity_service[this.i]));
                ul6.appendChild(li6);
            }
          } else {
            li6.appendChild(document.createTextNode(listcommunity_service));
            ul6.appendChild(li6);
          }
         
        
          this.publication = response.data.lecturers[0].publication;
          var listpublication = this.publication; 
          var ul7 = document.getElementById("publikasi");
          if (String(this.publication).includes(";")) {
            listpublication = this.publication.split(";");
                for (this.i = 0; this.i < listpublication.length; this.i++) {
                    var li7 = document.createElement("li");
                    li7.appendChild(document.createTextNode(listpublication[this.i]));
                    ul7.appendChild(li7);
                }
          }else {
            li7.appendChild(document.createTextNode(listcommunity_service));
            ul7.appendChild(li7);
          }
          
        });
    },
  },
});
</script>
