<template>
    <div class="partnership">
        <Navbar/>
        <BannerImage
            title="Mitra Kami"
            image="http://www.hope-a.com/images/food/agency-partnership.jpg"
            color="text-white"
        />
        <div>
            
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

export default {
    components: {
        BannerImage, Navbar, Footer
    },
    name: "Partnership",
}
</script>