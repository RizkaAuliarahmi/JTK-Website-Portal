<template>
    <div class="grid grid-cols-flow grid-rows-8 gap-8 mx-20 my-4">
        <div class="col-start-1 col-span-2">
            <h5 class="text-4xl font-medium font-montserrat">
                Galeri
            </h5>
        </div>
        <div class="row-start-1 row-span-2 col-start-3 col-span-5 ">
            <img class="w-full h-full" src="img/webjtk/galeri2.png"/>
        </div>
        <div class="bg3 row-start-2 col-span-2 row-span-3">
            <img class="w-full h-full" src="img/webjtk/sarasehan3.jpeg"/>
        </div>
        <div class="bg4 row-start-3 col-start-3 col-span-4 row-span-2">
             <img class="w-full h-full" src="img/webjtk/galeri3.jpg"/>
        </div>
        <div class="bg4 col-start-7 row-start-4 col-span-4">
             <img class="w-full h-full" src="img/webjtk/galeri4.jpg"/>
        </div>
         <div class="bg4 col-start-8 row-start-1 row-span-3 col-span-4">
             <img class="w-full h-full" src="img/webjtk/galeri5.jpg"/>
        </div>
    </div>
</template>
<style scoped>
.bg1{
    background-color: orchid;
}
.bg2{
    background-color:aqua;
}
.bg3{
    background-color:bisque;
}
.bg4{
    background-color:blue;
}
.bg5{
    background-color:blueviolet;
}
.bg6{
    background-color:brown;
}
</style>
<script>
import Vue from "vue";
export default Vue.extend({
  name: "GaleriLandingPage",
});
</script>