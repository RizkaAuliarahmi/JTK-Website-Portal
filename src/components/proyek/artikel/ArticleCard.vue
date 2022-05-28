<template>
    <div>
        <a  v-for="(data, index) in data" :key="index">
            <div class="grid gap-0 flex ">
                <div class="flex">
                    <div  class="w mb-4 object-fill">
                    <img :src="data.banner_image[0].url" class=" object-fill w-fit h-fit ml-6"/>
                    </div>
                    <div>
                        <h5 class="text-24-36 font-bold mt-12 font-lato ml-11">{{data.title}}</h5>
                        <h5 class="text-11-20 font-lato font-bold ml-11">{{data.article_category.category_name}} | {{data.updatedAt}}</h5>
                    </div>
                    <br>
                </div>
            </div>
        </a>
    </div>
</template>

<style scoped>
.check{
  background-color: plum;
}
.check2{
    background-color: powderblue;
}
.bottom{
    bottom: 100px;
}
.color{
    background-color: rgba(20, 46, 70, 0.55);
}
.ml{
    margin-left: 3.5%;
}
.mr{
    margin-right: 3.5%;
}
.text-20-32{
    color: #142E46;
    font-size: 20px;
    align-items: center;
    letter-spacing: 0.44px;
    line-height: 32px;  
}
.text-24-36{
    color: #142E46;
    font-size: 24px;
    align-items: center;
    letter-spacing: 0.44px;
    line-height: 36px;    
}
.text-11-20{
    color: rgba(20, 46, 70, 0.65);
    font-size: 11px;
    align-items: center;
    letter-spacing: 0.44px;
    line-height: 20px;    
}
.w{
    max-width: 301.83px;
    max-height: 160px;
    min-width:auto;
    max-width: auto;
}
</style>


<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "articleCard",
  props: ["data", "index"],

});
</script>