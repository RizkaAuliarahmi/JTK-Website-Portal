<template>
    <div id="news-portal">
        <div class="news-portal font-montserrat">
            <Navbar />
            <div class="h-150"></div>
            <div class="justify-center mt-30 my-5">
                <p class="text-2xl text-center"> Berita Terbaru </p>
            </div>
            <div class="flex mb-10">
                <NewsPortraitCard
                    v-if="newsData"
                    :data="newsData"
                    :isIndex="true"
                />
            </div>
            <div class="flex flex-row my-5 justify-between">
                <NewsLandscapeCard
                    v-if="newsData"
                    :data="newsData"
                    :isIndex="true"
                />
            </div>
            <div class="flex flex-col news-small my-8">
                <div class="mt-5">
                    <p class="text-2xl text-center"> Berita Lainnya </p>
                </div>
                <div class="mt-5">
                    <NewsSmallCard
                        v-if="newsData"
                        :data="newsData"
                    />
                </div>
            </div>
            <Footer />
        </div>
    </div>
</template>

<style scoped>
.news-small{
    background-color: #F39C12;
}
.h-150{
    height: 150px;
}
</style>

<script>
/* eslint-disable */
import Navbar from "@/components/webjtk/Navbar.vue";
import Footer from "@/components/webjtk/Footer.vue";
import NewsSmallCard from "@/components/webjtk/News/NewsSmallCard.vue";
import NewsPortraitCard from "@/components/webjtk/News/NewsPortraitCard.vue";
import NewsLandscapeCard from "@/components/webjtk/News/NewsLandscapeCard.vue";
import newsData from "@/dummy/news-dummy.json";

export default {
    components: {
        Navbar,
        Footer,
        NewsPortraitCard,
        NewsLandscapeCard,
        NewsSmallCard,
    },

    name:"NewsPortal",

    data() {
        return {
            CMS_API: process.env.APP_CMS_API,
            newsData: newsData,
            pageData: [{}],
        };
    },

    // created() {
    //     this.fetchData();
    // },

    // methods: {

    //     async fetchData() {
    //         const newsData = await axios.get(this.CMS_API + "/news-infos");
    //         this.newsData = newsData.data;
    //     },
    // },
}
</script>