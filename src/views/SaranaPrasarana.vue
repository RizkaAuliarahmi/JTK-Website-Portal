<template>
    <div class="saranaprasarana">
        <Navbar/>
        <BannerImage
            title="Sarana Prasarana"
            image="img/webjtk/banner.png"
            color="text-white"
        />
        <div>
        <div class="grid mx-20 mt-8 ">
        <h5 class="font-semibold text-black items-center content-center self-center text-2xl justify-self-center font-montserrat text-center align-center">Sarana dan Prasarana</h5>
   <h5 class="ml-20 font-medium text-black items-left content-left self-left text-2xl justify-self-left font-montserrat text-left align-left">Sarana</h5>
  <v-card
    class="mx-auto"
    max-width="w-screen"
  >

    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
            <v-spacer></v-spacer>
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>

  <h5 class="ml-20 mt-8 font-medium text-black items-left content-left self-left text-2xl justify-self-left font-montserrat text-left align-left">Prasarana</h5>
  <v-card
    class="mx-auto mb-8"
    max-width="w-screen"
  >

    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="item in items"
          :key="item.title"
          :cols="item.flex"
        >
          <v-card>
            <v-img
              :src="item.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
            <v-spacer></v-spacer>
              <v-card-title v-text="item.title"></v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>

        </div>
        </div>
        <Footer/>
    </div>
</template>
<script>
import BannerImage from "../components/webjtk/BannerImage.vue";
import Navbar from "../components/webjtk/Navbar.vue";
import Footer from "../components/webjtk/Footer.vue";

export default {
    components: {
        BannerImage, Navbar, Footer
    },
    name: "SaranaPrasarana",
    data: () => ({
      cards: [
        { title: 'Peralatan Elektronik', src: 'img/webjtk/image 10.png', flex:3 },
        { title: 'Peralatan Pembelajaran', src: 'img/webjtk/image 13.png', flex:3 },
        { title: 'Peralatan Kantor', src: 'img/webjtk/image 12.png', flex:3 },
        { title: 'Peralatan Rapat', src: 'img/webjtk/image 11.png', flex:3 },
        
      
      ],
      items: [
        { title: '8 Ruang Kelas', src: 'img/webjtk/image 8.png', flex:3 },
        { title: '5 Ruang Komputer', src: 'img/webjtk/image 9.png', flex:3 },
        { title: 'Ruang Server', src: 'img/webjtk/image 15.png', flex:3 },
        { title: 'E-Library', src: 'img/webjtk/image 14.png', flex:3 },
      
      ],
    }),
}
</script>