<template>
  <div>

   <Navbar :isTransparent="false" />
  <div class="bg-header "></div>
  <section class="mb-10">
  </section>




    <div class="container mx-auto">    
     


        <BannerCard
          category="Blog"
          categoryImg="/img/partnership/saung.png"
        />



          <!-- Chip Gan ----------------------------------------------------------------------------------------------------------------------------------------------->
         <section class="mb-10">
                <div class="flex flex-wrap justify-center" >

                    <div
                     v-for="tag in article_categories"
                               :key="tag">
                    <span
                        @click="selected = tag.category_name "
                        class=" hover:bg-gray-300 border px-12 py-4 mx-4 my-2 rounded-full text-gray-500 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                          {{tag.category_name}}
                    </span> 
                    </div>
                     <span
                        @click="goToIndexArticle"
                        class=" hover:bg-green-500 bg-green-400 border px-12 py-4 mx-4 my-2 rounded-full text-white font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                          Index Artikel ->
                    </span> 

                </div>
        </section>
        
    
        <!-- Artikel Atas Gan ------------------------------------------------------------------------------------------------------------------------------------------------>
          <section>
              <div class="flex flex-wrap -m-4">

                  <div
                                class="p-4 md:w-1/5"
                                v-for="tag in article.slice(0,5)"
                               :key="tag">
                               <div
                               v-for="tags in tag.banner_image"
                               :key="tags"
                               >


                                      <div class="h-full rounded-md shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                                        <router-link :to="{ name: 'ArticleRead', params: { id:'1', title:article_title, writer:article_writer, time:article_time, text:article_text  }}">
                                        <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"  v-bind:src="tags.url" />
                                        <div class="p-6">
                                          <h2 class="text-indigo-900 tracking-widest text-2xl title-font font-medium text-gray-400 mb-1">Uncesco Global Geopark Youth</h2>
                                          <h1 class="title-font text-lg font-medium text-gray-600 mb-3">The Catalyzer</h1>
                                        </div>
                                        </router-link>
                                      </div>




                        </div>
                  </div>

              </div> 
        </section>

       


        <section class="mb-4">
            <hr style="height:2px;border-width:0;color:gray;background-color:gray">
        </section>




         <!-- Body Gan ------------------------------------------------------------------------------------------------------------------------------------------------>
        <section>
              <div class=" flex flex-wrap ">

                    <!-- Bagian Left Side Gan -->
                  
                    <div class=" lg:w-3/4 sm:w-full lg:pr-20 sm:pr-0 ...">

                        <div class="mb-4">
                            <h1 class=" font-semibold lg:text-5xl text-blue-800 sm:text-4xl md:text-3xl">Artikel Teratas</h1>
                        </div>
                        
                            
                        <div class=" bg-cyan rounded-md mb-10">
                           <router-link :to="{ name: 'ArticleRead', params: { id:'1', title:article_title, writer:article_writer, time:article_time, text:article_text  }}">
                                <img class=" rounded-md w-full" v-bind:src="article[0].banner_image[0].url" />
                                <h2 class="text-indigo-900 tracking-widest text-4xl title-font font-medium text-gray-400 mb-1 ml-5">Ingin Liburan Seru Dengan Tour Travel? Coba 7 Tips Memilih Jasa Tour Travel untuk Liburan Keluarga</h2>
                                <h1 class="title-font text-lg font-medium text-white mb-3 ml-5">The Catalyzer </h1>
                           </router-link>
                        </div>  


                        <section class="mb-4">
                            <hr style="height:2px;border-width:0;color:gray;background-color:gray">
                        </section>

                          <section class=" flex flex-wrap mb-10 ">
                            <div>

                                <div class="flex mb-10">
                                    <h1 class=" w-3/4  font-semibold lg:text-5xl text-blue-800 sm:text-2xl  ">Umpan Artikel</h1>
                                    <h1 class=" text-blue-700 sm:text-sm">Index Artikel -></h1>
                                </div>



                               <div class=" grid grid-cols-2 gap-4 "> 

                                      <div class="mb-10 col-start-1 col-end-2 ">
                                        <router-link :to="{ name: 'ArticleRead', params: { id:'1', title:article_title, writer:article_writer, time:article_time, text:article_text  }}">
                                        <h2 class="  text-indigo-900 tracking-widest title-font font-medium text-gray-400 mb-1 lg:text-3xl md:text-xl sm:text-sm ">Ingin Liburan Seru Dengan Tour Travel? Coba 7 Tips Memilih Jasa Tour Travel untuk Liburan Keluarga</h2>
                                        <h1 class="  title-font text-lg font-medium text-gray-600 mb-3">Category # | 11 April 2022</h1>
                                        </router-link>
                                    </div>

                                    <div class="mb-10 col-start-2 col-end-3 ">
                                          <router-link :to="{ name: 'ArticleRead', params: { id:'1', title:article_title, writer:article_writer, time:article_time, text:article_text  }}">
                                            <img class=" mr-4 lg:w-full lg:h-full min-h-0 min-w-0 rounded-md" v-bind:src="article[0].banner_image[0].url" />
                                          </router-link>
                                    </div>
                              
                               </div>

                               <!-- <div
                                v-for="tag in article"
                               :key="tag">
                               <div
                               v-for="tags in tag.banner_image"
                               :key="tags">
                                <img v-bind:src="tags.url" /> 
                               </div>
                                   
                               </div> -->


                            </div>
                        </section>





                        <!-- OOOOOOOOOOOOOOOOOOOOOOOOOOOO-->

                        <section>

                          <!-- <div class=" flex flex-wrap " v-if="selected === 'Geosites' || selected === {} ">     -->
                          <div class=" flex flex-wrap " v-show="article_categories[2].category_name" >    
                           <div
                                v-for="tag in article"
                               :key="tag">
                               
                               <div
                               v-for="tags in tag.banner_image"
                               :key="tags"
                               >


                              <div class="mb-10 " >
                                    <router-link :to="{ name: 'ArticleRead', params: { id:'1', title:article_title, writer:article_writer, time:tag.createdAt, text:tag.description, tag:tag.tag, imagee:tags.url  }}"
                                    class="w-full flex flex-row">
                                    <div class="w-1/2 mx-10 ">
                                       <img class=" mr-4 lg:w-full lg:h-full min-h-0 min-w-0 rounded-md" v-bind:src="tags.url" />

                                    </div>

                                    <div class=" w-1/2 ">
                                        <h2 class="  text-indigo-900 tracking-widest title-font font-medium text-gray-400 mb-1 lg:text-3xl md:text-xl sm:text-sm ">Ingin Liburan Seru Dengan Tour Travel? Coba 7 Tips Memilih Jasa Tour Travel untuk Liburan Keluarga</h2>
                                        <h1 class="  title-font text-lg font-medium text-gray-600 mb-3" >    CCategory # | 11 April 2022</h1>
                                    </div>
                                    
                                    </router-link>
                              </div>
                    

                               </div>
                                   
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
                                      <button class="text-white p-4 bg-cyan hover:bg-green-600 rounded-3xl text-xs " @click="goToIndexArticle">
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
import BannerCard from "../../components/partnership/BannerCard.vue";



export default Vue.extend({
  components: { Navbar, Footer, BannerCard },
  name: "ArticleHome",

  data() {
    return {
        selected : {},
        article_categories : [],
        article : [],
        test : [],
        image2 : "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
        userProfilePic : {},
        article_title : "Unesco",
        article_writer : "wafi",
        article_time : "monday etc",
        article_text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
        lorem : [],
        show: Boolean
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
    
    goToIndexArticle(){
      this.$router.push({
        name: "IndexArticle",
      });
    }
  }
});
</script>
