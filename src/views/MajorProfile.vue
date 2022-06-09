<template>
    <div class="font-montserrat major-profile">
        <Navbar/>
        <BannerImage
            title="Profil Jurusan Teknik Komputer dan Informatika"
            image="img/webjtk/banner.png"
            color="text-white"
        />

        <div v-if="datavismis">
            <div class="mx-20 justify-left">
                <p class="font-bold text-2xl pt-3 my-4">
                    Visi
                </p>
            </div>
            <div class="mx-20 text-l mb-4">
                <p>
                    {{ datavismis.Visi }}
                </p>
            </div>
            <div class="mx-20 justify-left">
                <p class="font-bold text-2xl mb-4">
                    Misi
                </p>
            </div>
            <div class="mx-20 text-l mb-4">
                <p>
                    {{ datavismis.Misi }}
                </p>
            </div>
            <div class="justify-center mx-5 mt-4">
                <p class="text-xl font-bold text-center"> Profil Program Studi </p>
            </div>
            <div class="flex flex-col my-8">
                <PartnershipGallery
                    v-if="data_major"
                    :data="data_major"
                    :isPartnership="false" 
                />
            </div>
            <div class="my-8 mx-20 color-gray">
                <p> Terakhir diperbarui pada {{ formatDateStr(datavismis.article_comp.last_update) }} oleh {{ datavismis.article_comp.author }} </p>
            </div>
        </div>

        <Footer/>
    </div>
</template>

<style>

</style>

<script>
import BannerImage from "../components/webjtk/BannerImage.vue";
import Navbar from "../components/webjtk/Navbar.vue";
import Footer from "../components/webjtk/Footer.vue";
import axios from 'axios'
import PartnershipGallery from "@/components/webjtk/PartnershipGallery.vue";

var monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    pad = function(str) {return ("0"+str).slice(-2);};

export default {
    components: {
        BannerImage, Navbar, Footer, PartnershipGallery
    },
    name: "MajorProfile",

    data() {
        return {
            data_major: [{}],
            datavismis: [{}],
        };
    },

    created() {
        this.fetchDataMajor();
        this.fetchDataVisMis();
        this.formatDateStr();
    },

    methods: {
        async fetchDataMajor() {
            const data_major = await axios.get("http://localhost:1337/departments");
            this.data_major = data_major.data;
        },

        async fetchDataVisMis() {
            const datavismis = await axios.get("http://localhost:1337/general-infos");
            this.datavismis = datavismis.data[0];
        },

        async formatDateStr(dStr) {
            var date = new Date(dStr.replace("T"," ").replace(/-/g,"/"));
            return pad(date.getDate()) + 
                   " " + monthNames[date.getMonth()] +
                   " " + date.getFullYear();
        },
    },
}
</script>