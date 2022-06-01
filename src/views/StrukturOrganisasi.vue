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
      </div>
        <!-- gambar dan jabatann -->
        <div class="bg-sky mt-4 mx-0">
          <div class="mx-20 mt-8">
        <div class="grid grid-cols-10 grid-rows-flow" v-if="employeeDataObject">
          <!-- <ProfilCard :data="employeeDataObject" :index="employeeDataObject.length"/> -->
             <div class="col-span-10 place-self-center mt-12">
                <span class="font-semibold font-montserrat text-2xl">
                      {{judul[0]}}
                </span>
            </div>
            <div :class="mulai_dari[0]" class="col-span-2 mt-4 back-color place-self-center" @click="goToDetail(employeeDataObject[0]._id)">
                <img class="w-full h-4/5" :src="src_gambar[0]"/>
                <div class="grid grid-cols-2">
                    <div class="col-span-2 place-self-center">
                        <h5 class="font-semibold font-montserrat text-base text-center">{{employeeDataObject[0].functional_occupation}}</h5>
                        <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[0].name}}</h5>
                        <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[0].nip}}</h5>
                    </div>
                </div>
            </div>
            <div :class="mulai_dari[1]" class="col-span-2 mt-4 back-color place-self-center" @click="goToDetail(employeeDataObject[1]._id)">
                <img class="w-full h-4/5" :src="src_gambar[1]"/>
                <div class="grid grid-cols-2">
                    <div class="col-span-2 place-self-center">
                        <h5 class="font-semibold font-montserrat text-base text-center">{{employeeDataObject[1].functional_occupation}}</h5>
                        <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[1].name}}</h5>
                        <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[1].nip}}</h5>
                    </div>
                </div>
            </div>
            <div class="row-start-3 col-span-10 place-self-center mt-12">
                <span class="font-semibold font-montserrat text-2xl">
                      {{judul[1]}}
                </span>
            </div>
        </div>

        
            <div class="grid grid-cols-10 grid-rows-flow" v-if="employeeDataObject">         
              <div :class="mulai_dari[2]" class="col-span-2 mt-4 back-color place-self-center" @click="goToDetail(employeeDataObject[2]._id)">
                  <img class="w-full h-4/5" :src="src_gambar[2]"/>
                  <div class="grid grid-cols-2">
                      <div class="col-span-2 place-self-center">
                          <h5 class="font-semibold font-montserrat text-base text-center">{{employeeDataObject[2].functional_occupation}}</h5>
                          <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[2].name}}</h5>
                          <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[2].nip}}</h5>
                      </div>
                  </div>
              </div>
              <div :class="mulai_dari[3]" class="col-span-2 mt-4 back-color place-self-center" @click="goToDetail(employeeDataObject[3]._id)">
                  <img class="w-full h-4/5" :src="src_gambar[3]"/>
                  <div class="grid grid-cols-2">
                      <div class="col-span-2 place-self-center">
                          <h5 class="font-semibold font-montserrat text-base text-center">{{employeeDataObject[3].functional_occupation}}</h5>
                          <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[3].name}}</h5>
                          <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[3].nip}}</h5>
                      </div>
                  </div>
                  </div>
              <div class="row-start-4 col-span-10 place-self-center mt-12">
                  <span class="font-semibold font-montserrat text-2xl">
                        {{judul[2]}}
                  </span>
              </div>
            </div>

            <div class="grid grid-cols-10 grid-rows-flow" v-if="employeeDataObject">         
              <div :class="mulai_dari[4]" class="col-span-2 mt-4 back-color place-self-center" @click="goToDetail(employeeDataObject[4]._id)">
                  <img class="w-full h-4/5" :src="src_gambar[4]"/>
                  <div class="grid grid-cols-2">
                      <div class="col-span-2 place-self-center">
                          <h5 class="font-semibold font-montserrat text-base text-center">{{employeeDataObject[4].functional_occupation}}</h5>
                          <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[4].name}}</h5>
                          <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[4].nip}}</h5>
                      </div>
                  </div>
              </div>
              <div :class="mulai_dari[5]" class="col-span-2 mt-4 back-color place-self-center" @click="goToDetail(employeeDataObject[5]._id)">
                  <img class="w-full h-4/5" :src="src_gambar[5]"/>
                  <div class="grid grid-cols-2">
                      <div class="col-span-2 place-self-center">
                          <h5 class="font-semibold font-montserrat text-base text-center">{{employeeDataObject[5].functional_occupation}}</h5>
                          <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[5].name}}</h5>
                          <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[5].nip}}</h5>
                      </div>
                  </div>
                </div>
                <div :class="mulai_dari[6]" class="col-span-2 mt-4 back-color place-self-center" @click="goToDetail(employeeDataObject[6]._id)">
                  <img class="w-full h-4/5" :src="src_gambar[6]"/>
                  <div class="grid grid-cols-2">
                      <div class="col-span-2 place-self-center">
                          <h5 class="font-semibold font-montserrat text-base text-center">{{employeeDataObject[6].functional_occupation}}</h5>
                          <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[6].name}}</h5>
                          <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[6].nip}}</h5>
                      </div>
                  </div>
                </div>
              <div class="row-start-5 col-span-10 place-self-center mt-12">
                  <span class="font-semibold font-montserrat text-2xl">
                        {{judul[3]}}
                  </span>
              </div>
            </div>

            <div class="grid grid-cols-10 grid-rows-flow" v-if="employeeDataObject">         
              <div :class="mulai_dari[7]" class="col-span-2 mt-4 back-color place-self-center" @click="goToDetail(employeeDataObject[7]._id)">
                  <img class="w-full h-4/5" :src="src_gambar[7]"/>
                  <div class="grid grid-cols-2">
                      <div class="col-span-2 place-self-center">
                          <h5 class="font-semibold font-montserrat text-base text-center">{{employeeDataObject[7].functional_occupation}}</h5>
                          <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[7].name}}</h5>
                          <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[7].nip}}</h5>
                      </div>
                  </div>
              </div>
              <div :class="mulai_dari[8]" class="col-span-2 mt-4 back-color place-self-center" @click="goToDetail(employeeDataObject[8]._id)">
                  <img class="w-full h-4/5" :src="src_gambar[8]"/>
                  <div class="grid grid-cols-2">
                      <div class="col-span-2 place-self-center">
                          <h5 class="font-semibold font-montserrat text-base text-center">{{employeeDataObject[8].functional_occupation}}</h5>
                          <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[8].name}}</h5>
                          <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[8].nip}}</h5>
                      </div>
                  </div>
                </div>
                <div :class="mulai_dari[9]" class="col-span-2 mt-4 back-color place-self-center" @click="goToDetail(employeeDataObject[9]._id)">
                  <img class="w-full h-4/5" :src="src_gambar[9]"/>
                  <div class="grid grid-cols-2">
                      <div class="col-span-2 place-self-center">
                          <h5 class="font-semibold font-montserrat text-base text-center">{{employeeDataObject[9].functional_occupation}}</h5>
                          <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[9].name}}</h5>
                          <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[9].nip}}</h5>
                      </div>
                  </div>
                </div>
                 <div :class="mulai_dari[10]" class="col-span-2 mt-4 back-color place-self-center" @click="goToDetail(employeeDataObject[10]._id)">
                  <img class="w-full h-4/5" :src="src_gambar[10]"/>
                  <div class="grid grid-cols-2">
                      <div class="col-span-2 place-self-center">
                          <h5 class="font-semibold font-montserrat text-base text-center">{{employeeDataObject[10].functional_occupation}}</h5>
                          <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[10].name}}</h5>
                          <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[10].nip}}</h5>
                      </div>
                  </div>
                </div>
                <div :class="mulai_dari[11]" class="col-span-2 mt-4 back-color place-self-center" @click="goToDetail(employeeDataObject[11]._id)">
                  <img class="w-full h-4/5" :src="src_gambar[11]"/>
                  <div class="grid grid-cols-2">
                      <div class="col-span-2 place-self-center">
                          <h5 class="font-semibold font-montserrat text-base text-center">{{employeeDataObject[11].functional_occupation}}</h5>
                          <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[11].name}}</h5>
                          <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[11].nip}}</h5>
                      </div>
                  </div>
                </div>
              <div class="row-start-6 col-span-10 place-self-center mt-12">
                  <span class="font-semibold font-montserrat text-2xl">
                        {{judul[4]}}
                  </span>
              </div>
            </div>

             <div class="grid grid-cols-10 grid-rows-flow" v-if="employeeDataObject">         
              <div :class="mulai_dari[12]" class="col-span-2 mt-4 back-color place-self-center" @click="goToDetail(employeeDataObject[12]._id)">
                  <img class="w-full h-4/5" :src="src_gambar[12]"/>
                  <div class="grid grid-cols-2">
                      <div class="col-span-2 place-self-center">
                          <h5 class="font-semibold font-montserrat text-base text-center">{{employeeDataObject[12].functional_occupation}}</h5>
                          <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[12].name}}</h5>
                          <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[12].nip}}</h5>
                      </div>
                  </div>
              </div>
              <div :class="mulai_dari[13]" class="col-span-2 mt-4 back-color place-self-center" @click="goToDetail(employeeDataObject[13]._id)">
                  <img class="w-full h-4/5" :src="src_gambar[13]"/>
                  <div class="grid grid-cols-2">
                      <div class="col-span-2 place-self-center">
                          <h5 class="font-semibold font-montserrat text-base text-center">{{employeeDataObject[13].functional_occupation}}</h5>
                          <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[13].name}}</h5>
                          <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[13].nip}}</h5>
                      </div>
                  </div>
                </div>
                <div :class="mulai_dari[14]" class="col-span-2 mt-4 back-color place-self-center" @click="goToDetail(employeeDataObject[14]._id)">
                  <img class="w-full h-4/5" :src="src_gambar[14]"/>
                  <div class="grid grid-cols-2">
                      <div class="col-span-2 place-self-center">
                          <h5 class="font-semibold font-montserrat text-base text-center">{{employeeDataObject[14].functional_occupation}}</h5>
                          <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[14].name}}</h5>
                          <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[14].nip}}</h5>
                      </div>
                  </div>
                </div>
                 <div :class="mulai_dari[15]" class="col-span-2 mt-4 back-color place-self-center" @click="goToDetail(employeeDataObject[15]._id)">
                  <img class="w-full h-4/5" :src="src_gambar[15]"/>
                  <div class="grid grid-cols-2">
                      <div class="col-span-2 place-self-center">
                          <h5 class="font-semibold font-montserrat text-base text-center">{{employeeDataObject[15].functional_occupation}}</h5>
                          <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[15].name}}</h5>
                          <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[15].nip}}</h5>
                      </div>
                  </div>
                </div>
                <div :class="mulai_dari[16]" class="col-span-2 mt-4 back-color place-self-center"  @click="goToDetail(employeeDataObject[16]._id)">
                  <img class="w-full h-4/5" :src="src_gambar[16]"/>
                  <div class="grid grid-cols-2">
                      <div class="col-span-2 place-self-center">
                          <h5 class="font-semibold font-montserrat text-base text-center">{{employeeDataObject[16].functional_occupation}}</h5>
                          <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[16].name}}</h5>
                          <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[16].nip}}</h5>
                      </div>
                  </div>
                </div>
                <div :class="mulai_dari[17]" class="col-span-2 mt-4 back-color place-self-center" @click="goToDetail(employeeDataObject[17]._id)">
                  <img class="w-full h-4/5" :src="src_gambar[17]"/>
                  <div class="grid grid-cols-2">
                      <div class="col-span-2 place-self-center">
                          <h5 class="font-semibold font-montserrat text-base text-center">{{employeeDataObject[17].functional_occupation}}</h5>
                          <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[17].name}}</h5>
                          <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[17].nip}}</h5>
                      </div>
                  </div>
                </div>
              <div class="row-start-6 col-span-10 place-self-center mt-12">
                  <span class="font-semibold font-montserrat text-2xl">
                        {{judul[5]}}
                  </span>
              </div>
            </div>

            <div class="grid grid-cols-10 grid-rows-flow" v-if="employeeDataObject">         
              <div :class="mulai_dari[18]" class="col-span-2 mt-4 back-color place-self-center" @click="goToDetail(employeeDataObject[18]._id)">
                  <img class="w-full h-4/5" :src="src_gambar[18]"/>
                  <div class="grid grid-cols-2">
                      <div class="col-span-2 place-self-center">
                          <h5 class="font-semibold font-montserrat text-base text-center">{{employeeDataObject[18].functional_occupation}}</h5>
                          <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[18].name}}</h5>
                          <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[18].nip}}</h5>
                      </div>
                  </div>
              </div>
              <div :class="mulai_dari[19]" class="col-span-2 mt-4 back-color place-self-center" @click="goToDetail(employeeDataObject[19]._id)">
                  <img class="w-full h-4/5" :src="src_gambar[19]"/>
                  <div class="grid grid-cols-2">
                      <div class="col-span-2 place-self-center">
                          <h5 class="font-semibold font-montserrat text-base text-center">{{employeeDataObject[19].functional_occupation}}</h5>
                          <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[19].name}}</h5>
                          <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[19].nip}}</h5>
                      </div>
                  </div>
                </div>
                <div :class="mulai_dari[20]" class="col-span-2 mt-4 back-color place-self-center" @click="goToDetail(employeeDataObject[20]._id)">
                  <img class="w-full h-4/5" :src="src_gambar[20]"/>
                  <div class="grid grid-cols-2">
                      <div class="col-span-2 place-self-center">
                          <h5 class="font-semibold font-montserrat text-base text-center">{{employeeDataObject[20].functional_occupation}}</h5>
                          <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[20].name}}</h5>
                          <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[20].nip}}</h5>
                      </div>
                  </div>
                </div>
                 <div :class="mulai_dari[21]" class="col-span-2 mt-4 back-color place-self-center" @click="goToDetail(employeeDataObject[21]._id)">
                  <img class="w-full h-4/5" :src="src_gambar[21]"/>
                  <div class="grid grid-cols-2">
                      <div class="col-span-2 place-self-center">
                          <h5 class="font-semibold font-montserrat text-base text-center">{{employeeDataObject[21].functional_occupation}}</h5>
                          <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[21].name}}</h5>
                          <h5 class="font-medium font-montserrat text-base text-center">{{employeeDataObject[21].nip}}</h5>
                      </div>
                  </div>
                </div>
            </div>
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
.bg-sky{
  background-color: #f5b342;
}
.w-572{
  width: 572px;
}
</style>

<script>
import Vue from "vue";
import axios from "axios";
import BannerImage from "../components/webjtk/BannerImage.vue";
// import ProfilCard from "../components/webjtk/ProfilCard.vue";
import Navbar from "../components/webjtk/Navbar.vue";
import Footer from "../components/webjtk/Footer.vue";

export default Vue.extend({
  components: {
    BannerImage,  Navbar, Footer, 
    // ProfilCard
  },
  name: "StrukturOrganisasi",

data() {
    return {
        judul:["Manajemen Jurusan Periode 2019-2023","Program Studi","Kelompok Bidang Keahlian (KBK)","Laboratorium","Wali kelas Program Studi Teknik Informatika D-III","Wali kelas Program Studi Teknik Informatika D-IV"],
        mulai_dari:[
        "col-start-3 row-start-2",
        "col-start-7 row-start-2", 

        "col-start-3 row-start-2",
        "col-start-7 row-start-2", 

        "col-start-1 row-start-2", 
        "col-start-5 row-start-2", 
        "col-start-9 row-start-2", 

        "col-start-3 row-start-2",
        "col-start-7 row-start-2", 
        "col-start-1 row-start-3", 
        "col-start-5 row-start-3", 
        "col-start-9 row-start-3", 

        "col-start-1 row-start-2", 
        "col-start-5 row-start-2", 
        "col-start-9 row-start-2", 
        "col-start-1 row-start-3", 
        "col-start-5 row-start-3", 
        "col-start-9 row-start-3", 

        "col-start-3 row-start-2",
        "col-start-7 row-start-2", 
        "col-start-3 row-start-3",
        "col-start-7 row-start-3"],
        bagian_baru:[0,1,1,1,2,2,2,3,3,3,3,3,4,4,4,4,4,4,5],
        employeeDataObject:[{}],
        lengthemployeeData:0,
        src_gambar:[{}],
        i:0,
        lengthData:[[0,1]],
        employeeData:'',
        length1:1,
        employeData1:[]
    };
  }, 

  async created(){
      await this.fetchData();
  },

  methods: {
    async fetchData() {
      // get data kategori artikel
      const employeeData = await axios.get("https://cms-jtk-polban.herokuapp.com/tests");
      this.employeeDataObject = employeeData.data;  
      this.lengthemployeeData = employeeData.data.length;
      console.log("employeeobject "+this.lengthemployeeData)

      for(this.i=0;this.i<=this.lengthemployeeData;this.i++){
        if(this.employeeDataObject[this.i].gender == "male"){
          this.src_gambar[this.i] = "img/webjtk/man.png"
        }else if(this.employeeDataObject[this.i].gender == "female"){
          this.src_gambar[this.i] = "img/webjtk/woman.png"
        }

        if(this.lengthemployeeData<=1){
          this.employeeData1[this.i]==this.employeeDataObject[this.i]
          console.log("data spes"+this.employeeData1[0].name)
        }
      }

    },

    goToDetail(_id){
        this.$router.push({
        name: "ProfilPegawai",
        params: {id:_id},
        });
    },
      
    },
  
});

</script>
