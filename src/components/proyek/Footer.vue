<template>
  <div id="footer">
    <footer class="w-full bottom-0 bg-navy-blue px-5 py-10">
      <div
        v-if="footerData.footer_component"
        class="mx-3 flex text-sm font-lato text-white"
      >
        <!-- NAME AND ADDRESS -->
        <div class="px-5 w-11/12 2xl:w-5/12">
          <!-- Ciletuh & Unesco Logo & Text -->
          <div class="flex mb2">
            <div>
              <p class="geo-name font-bold mt-3 text-2xl">
                {{
                  footerData.footer_component[0].footer_component_body[0]
                    .footer_component_body_text
                }}
              </p>
              <img
                class="max-h-32"
                :src="
                  footerData.footer_component[0].footer_component_body[0]
                    .footer_component_body_image.url
                "
              />
            </div>
            <div class="ml3 2xl:mr3">
              <p class="mt-3 font-bold text-2xl">
                {{
                  footerData.footer_component[0].footer_component_body[1]
                    .footer_component_body_text
                }}
              </p>
              <img
                class="max-h-32"
                :src="
                  footerData.footer_component[0].footer_component_body[1]
                    .footer_component_body_image.url
                "
              />
            </div>
          </div>
          <!-- Triple Unesco Logo -->
          <img
            class="max-h-12 pr-3"
            :src="
              footerData.footer_component[0].footer_component_body[2]
                .footer_component_body_image.url
            "
          />
          <!-- Address -->
          <div class="2xl:w-2/3">
            <p class="font-bold text-2xl text-left pt-2.5 mb-0">
              {{ footerData.footer_component[1].footer_component_title }}
            </p>
            <p class="text-2xl mb-0 color-darkgray2">
              {{
                footerData.footer_component[1].footer_component_body[0]
                  .footer_component_body_text
              }}
            </p>
          </div>
          <div class="flex">
            <country-flag country="id" />
            <p class="text-2xl country color-darkgray2">
              {{
                footerData.footer_component[1].footer_component_body[1]
                  .footer_component_body_text
              }}
            </p>
          </div>
        </div>

        <div class="flex 2xl:w-3/5">
          <!-- CONNECT WITH US -->
          <div class="2xl:ml-2 text-left w-1/2">
            <p class="mt-3 font-bold text-2xl mb-0">
              {{ footerData.footer_component[2].footer_component_title }}
            </p>
            <br />
            <ion-icon name="logo-instagram"></ion-icon
            ><a class="text-xl color-darkgray2">{{
              footerData.footer_component[2].footer_component_body[0]
                .footer_component_body_text
            }}</a
            ><br />
            <ion-icon name="logo-facebook"></ion-icon
            ><a class="text-xl color-darkgray2">{{
              footerData.footer_component[2].footer_component_body[1]
                .footer_component_body_text
            }}</a
            ><br />
            <ion-icon name="call"></ion-icon
            ><a class="text-xl color-darkgray2">{{
              footerData.footer_component[2].footer_component_body[2]
                .footer_component_body_text
            }}</a
            ><br />
            <ion-icon name="mail"></ion-icon>
            <a class="text-xl color-darkgray2">{{
              footerData.footer_component[2].footer_component_body[3]
                .footer_component_body_text
            }}</a>
            <!-- SPONSORSHIP -->
            <div class="py-3">
              <p class="font-bold text-2xl mb-0">
                {{ footerData.footer_component[3].footer_component_title }}
              </p>
              <div class="flex">
                <img
                  class="max-h-10 pt-3 mr-3"
                  :src="
                    footerData.footer_component[3].footer_component_body[0]
                      .footer_component_body_image.url
                  "
                />
                <img
                  class="max-h-10 pt-3"
                  :src="
                    footerData.footer_component[3].footer_component_body[1]
                      .footer_component_body_image.url
                  "
                />
              </div>
            </div>
          </div>
          <!-- CREDITS -->
          <div class="ml-auto w-1/2 2xl:w-2/3">
            <p class="font-bold text-2xl mt-3">
              {{ footerData.footer_component[4].footer_component_title }}
            </p>
            <p class="text-justify text-xl color-darkgray2">
              {{
                footerData.footer_component[4].footer_component_body[0]
                  .footer_component_body_text
              }}
            </p>
            <p class="text-justify text-xl color-darkgray2">
              {{
                footerData.footer_component[4].footer_component_body[1]
                  .footer_component_body_text
              }}
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.country {
  margin-top: 2px;
  margin-left: 5px;
}

footer {
  height: 482px;
}

.bg-navy-blue {
  background-color: #142e46;
}

.geo-name {
  color: rgba(0, 180, 167, 1);
}

ion-icon {
  font-size: 16px;
  padding-right: 12px;
}
</style>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  name: "Footer",

  data() {
    return {
      CMS_API: process.env.VUE_APP_CMS_API,
      footerData: [],
      isOpen: false,
      state: "close",
    };
  },
  async created() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      const footerData = await axios.get(this.CMS_API + "/footer");
      this.footerData = footerData.data;
    },
  },
});
</script>
