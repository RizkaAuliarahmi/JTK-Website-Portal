<template>
    <div class="font-montserrat major-profile">
        <Navbar/>
        <BannerImage
            title="D3 Teknik Informatika"
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
            <div class="mx-20 justify-left">
                <p class="font-bold text-2xl mb-4">
                    Tujuan
                </p>
            </div>
            <div class="mx-20 text-l mb-4">
                <p>
                    {{ datavismis.Tujuan }}
                </p>
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

var monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    pad = function(str) {return ("0"+str).slice(-2);};

export default {
    components: {
        BannerImage, Navbar, Footer
    },
    name: "D4Page",

    data() {
        return {
            datavismis: [{}],
        };
    },

    created() {
        this.fetchDataVisMis();
        this.formatDateStr();
    },

    methods: {

        async fetchDataVisMis() {
            const datavismis = await axios.get("http://localhost:1337/general-infos");
            this.datavismis = datavismis.data[2];
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