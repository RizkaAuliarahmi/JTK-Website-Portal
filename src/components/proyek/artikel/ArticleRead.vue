<template>
  <div>

   <Navbar :isTransparent="false" />
  <div class="bg-header "></div>
  <section class="mb-10">

  </section>



    <div class="container mx-auto">    
        
        
    

                        <!-- Body Gan -->
                        <section>
                            <div class=" flex flex-wrap ">

                                <!-- Bagian Left Side Gan -->
                              
                                <div class="  lg:w-3/4 sm:w-full lg:pr-20 sm:pr-0 ... ">

                                  <section>

                                    <div class=" text-8xl text-center font-semibold mb-4 ">
                                      {{$route.params.title}}
                                    </div>

                                    <div class=" text-xl text-center font-openSans mb-4">
                                     by {{$route.params.writer}} >
                                    </div>

                                    <div class=" text-center mb-4">
                                      {{$route.params.time}}
                                    </div>

                                    <div class=" grid grid-cols-8 mb-10">

                                      <!-- <div class=" col-start-8 col-end-8">
                                        Share
                                      </div> -->
                                       <div class=" col-start-1 col-end-9 mb-10">
                                         <img class=" w-full h-full min-h-0 min-w-0 rounded-md justify-center "  v-bind:src= "$route.params.imagee" />
                                      </div>
                                      


                                      <div class=" col-start-1 col-end-9 mb-10">
                                       {{$route.params.text}}
                                      </div>

                                      <div class=" flex ">
                                        <button class="text-white p-4 bg-cyan hover:bg-green-500 rounded-2xl text-xl px-6 py-1 mx-2">
                                                    1
                                        </button>
                                        <button class="text-white p-4 bg-cyan hover:bg-green-500 rounded-2xl text-xl px-6 py-1 mx-2 ">
                                                    2
                                        </button>
                                        <button class="text-white p-4 bg-cyan hover:bg-green-500 rounded-2xl text-xl px-6 py-1 mx-2 ">
                                                    Selanjutnya
                                        </button>
                                      </div>

                                       

                                    </div>

                                    <section class="mb-4">
                                                <hr style="height:2px;border-width:0;color:gray;background-color:gray">
                                    </section>

                                    <div class="mb-4">
                                      <div class="flex flex-wrap " >
                                          <span
                                            v-for="tag in $route.params.tag.match(/[^,\s?]+/g)"
                                            :key = "tag"
                                              class=" bg-gray-300 border px-12 py-4 mx-4 my-2 rounded-2xl text-gray-500 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                               {{tag}}
                                          </span>
                                      </div>
                                    </div>

                                    <section class="mb-4">
                                                <hr style="height:2px;border-width:0;color:gray;background-color:gray">
                                    </section>


                                    <div class="grid grid-cols-2 gap-8">
                                      Artikel Terkait

                                      <div class="col-start-1 col-end-2">
                                        <div class="mb-10">
                                        {{$route.params.text}}
                                        </div>
                                         <section class="mb-4">
                                                <hr style="height:2px;border-width:0;color:gray;background-color:gray">
                                         </section>

                                      </div>

                                      <div class="col-start-2 col-end-3">
                                         <div class="mb-10">
                                        {{$route.params.text}}
                                        </div>
                                         <section class="mb-4">
                                                <hr style="height:2px;border-width:0;color:gray;background-color:gray">
                                         </section>

                                      </div>

                                    </div>
                                   
                  
                                      
                                  </section>
                        
                                </div>

                  


                                  <!-- Bagian Right Side Gan ------------------------------------------------------------------------------------------------------------------------------------------------>
                    <div class=" lg:w-1/4 sm:w-full  ...">
                            <section class="mb-4">
                                <hr style="height:2px;border-width:0;color:gray;background-color:gray">
                            </section>

                            <section class="mb-4">
                              <div>
                                <h1 class="text-indigo-900 font-semibold text-2xl pt-5 " >Artikel Terpopuler</h1>
                                  <h1>
                                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                  </h1> 
                                  <h1>
                                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                  </h1>
                                  <h1 class="mb-10">
                                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                  </h1>


                                  <div class="text-center">
                                    <button class="text-white p-4 bg-cyan hover:bg-green-600 rounded-3xl text-xs ">
                                    Lihat Selengkapnya →
                                    </button>
                                  </div>

                              </div>
                            </section>

                            <section class="mb-4">
                                <hr style="height:2px;border-width:0;color:gray;background-color:gray">
                            </section>

                            <section class="mb-4">
                              <div>
                                <h1 class="text-indigo-900 font-semibold text-2xl pt-5 " >Tag Terpopuler</h1>
                                <div 
                                 v-for="tag in article_categories.slice(0, 5)"
                               :key="tag">
                                  <h1 class=" my-2 text-blue-400">
                                      #{{tag.category_name}} 
                                  </h1> 
                                  
                                </div>
                                 
                              </div>
                            </section>

                            

                            <section class="mb-4">
                                <hr style="height:2px;border-width:0;color:gray;background-color:gray">
                            </section>

                            <section class="mb-4">
                              <div>
                                <h1 class="flex flex-wrap text-indigo-900 font-semibold text-2xl pt-5 " >Artikel Lainnya</h1>

                                <div

                                v-for="tag in article.slice(0,5)"
                               :key="tag">
                               <div
                               v-for="tags in tag.banner_image"
                               :key="tags"
                               >

                                <div class="flex mb-10">
                                          <img class=" mr-4 lg:w-full lg:h-full min-h-0 min-w-0 float-left rounded-md"  v-bind:src= "tags.url" />
                                          <!-- <img style="width:100%" :src="userProfilePic.banner_img[0].url" alt=""> -->
                                          <div>
                                              <h2 class="   text-indigo-900 tracking-widest text-md title-font font-medium text-gray-400 mb-1">Ingin Liburan Seru Dengan Tour Travel? Coba 7 Tips Memilih Jasa Tour Travel untuk Liburan Keluarga</h2>
                                              <h1 class="   title-font text-lg font-medium text-gray-600 mb-3">Category # | 11 April 2022</h1>
                                          </div>
                                    </div>

                               </div>
                                </div>
                              

                                    <div class="text-center">
                                      <button class="text-white p-4 bg-cyan hover:bg-green-600 rounded-3xl text-xs ">
                                      Index Artikel →
                                      </button>
                                    </div>

                              </div>
                            </section>

                            <section class="mb-4">
                                <hr style="height:2px;border-width:0;color:gray;background-color:gray">
                            </section>

 



                    </div>

                            </div>
                        </section>




     
      </div>

       <Footer></Footer>
    </div>
</template>
 

<style scoped>

</style>


<script lang="ts">
import Vue from "vue";
import axios from 'axios';
import Navbar from "../Navbar.vue";
import Footer from "../Footer.vue";


export default Vue.extend({
  components: { Navbar, Footer },
  name: "ArticleRead",

  data() {
    return {
        article_categories : [],
        article : [],
        test : [],
        image2 : "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
        userProfilePic : {},
        lorem : [],
    };
  },
  mounted(){
        axios
            .get('http://localhost:1337/article-categories')
            .then(response => {
                this.article_categories = response.data
                // console.log(response.data)
            })
            .catch(error => console.log(error)),
        axios
            .get('http://localhost:1337/articles')
            .then(response => {
                this.article = response.data
                // console.log(response.data)
            })
            .catch(error => console.log(error)),
            axios
            .get('http://asdfast.beobit.net/api/')
            .then(response => {
                this.lorem = response.data
                // console.log(response.data)
            })
            .catch(error => console.log(error))
        
    },
    methods: {
    getImage () {
      this.userProfilePic = this.article
    },
  }
});
</script>
