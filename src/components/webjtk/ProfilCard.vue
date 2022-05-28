<template>
    <div>
        <a  v-for="(data, index) in data" :key="index">
            <div class="col-span-10 place-self-center mt-12" v-if="index==0||index==2||index==4||index==18||index==12||index==7">
                <span class="font-semibold font-montserrat text-2xl">
                    {{judul[bagian_baru[index]]}}
                </span>
            </div>
            <div :class="mulai_dari[index]" class="col-span-2 mt-4 back-color place-self-center">
                <img class="w-full h-4/5" :src="gambar"/>
                <div class="grid grid-cols-2">
                    <div class="col-span-2 place-self-center">
                        <h5 class="font-semibold font-montserrat text-lg">{{data.functional_occupation}}<br></h5>
                        <h5 class="font-medium font-montserrat text-lg">{{data.name}}<br>{{data.nip}}</h5>
                    </div>
                </div>
            </div>
        </a>
    </div>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
  name: "ProfilCard",
  props:["data","index"],
  //props:["nama","nip","jabatan","gambar","mulai_dari"],

   data() {
    return {
        judul:["Manajemen Jurusan Periode 2019-2023","Program Studi","Kelompok Bidang Keahlian (KBK)","Laboratorium","Wali kelas Program Studi Teknik Informatika D-III","Wali kelas Program Studi Teknik Informatika D-IV"],
        mulai_dari:["col-start-3","col-start-7", "col-start-3","col-start-7", "col-start-1", "col-start-5", "col-start-9", "col-start-3","col-start-7", "col-start-1", "col-start-5", "col-start-9", "col-start-1", "col-start-5", "col-start-9", "col-start-1", "col-start-5", "col-start-9", "col-start-3","col-start-7", "col-start-3","col-start-7"],
        bagian_baru:[0,1,1,1,2,2,2,3,3,3,3,3,4,4,4,4,4,4,5]
    };
  },

mounted: {
    pickImage(){
        if(this.data.gender == "male"){
            this.gambar = "img/webjtk/Rectangle.png"
        }else{
            this.gambar = "img/webjtk/banner.png"
        }
    }
    
    },
});
</script>