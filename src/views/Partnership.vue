<template>
    <div class="partnership font-montserrat">
        <Navbar/>
        <BannerImage
            title="Mitra Kami"
            image="http://www.hope-a.com/images/food/agency-partnership.jpg"
            color="text-white"
        />
        <div v-if="data" class="mt-10 mx-20">
            <p class="text-sm color-gray"> Last Updated {{ data.last_update }} by {{ data.author }} </p>
        </div>
        <div class="mt-6 mx-20">
            <div
                v-for="(item, index) in data.content.description"
                :key="index"
                class="carousel-card mb-2 h-full"
            >
                <div class="text-justify text-sm">
                    {{ data.content.description[index] }}
                </div>
                <br>
            </div>
        </div>
        <div class="justify-center mx-5 mt-4">
            <p class="text-m font-bold text-center"> Ayo bergabung dengan kami! </p>
        </div>
        <v-layout align-center justify-center>
            <v-btn color="orange" class="text-white mx-5 mb-4"> Gabung </v-btn>
        </v-layout>
        <div class="flex flex-col my-8">
            <PartnershipGallery
                v-if="data_partner"
                :data="data_partner"
                :isPartnership="true" 
            />
        </div>
        <Footer/>
    </div>
</template>

<style scoped>
.h-150{
    height: 150px;
}
</style>

<script>
import BannerImage from "../components/webjtk/BannerImage.vue";
import Navbar from "../components/webjtk/Navbar.vue";
import Footer from "../components/webjtk/Footer.vue";
import data from "@/dummy/partnership.json";
import PartnershipGallery from "@/components/webjtk/PartnershipGallery.vue";

export default {
    components: {
        BannerImage, Navbar, Footer, PartnershipGallery
    },
    name: "Partnership",

    data() {
        return {
            CMS_API: process.env.APP_CMS_API,
            data: data,
            data_partner: data.list_partner,
        };
    },
}
</script>