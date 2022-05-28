<template>
    <div class="news-portal font-montserrat">
        <Navbar />
        <div class="content-center">
            <p> Berita Terbaru </p>
        </div>
        <div class="flex">
            
        </div>
        <Footer />
    </div>
</template>

<style scoped>

</style>

<script>
import Navbar from "@/components/webjtk/Navbar.vue";
import Footer from "@/components/webjtk/Footer.vue";

export default {
    components: {
        Navbar,
        Footer,
  },
}
</script>