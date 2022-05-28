<template>
  <div>
    <!-- Subscribe -->
    <div class="shadow">
      <div class="font-lato text-5xl text-center font-bold mb-6">
        Subscribe Us!
      </div>
      <div class="flex justify-center mb-7">
        <span
          class="font-lato text-4xl text-center font-bold text-center color-navyblue w-3/5"
          >Subscribe to our newsletter and stay updated on the latest news &
          events.</span
        >
      </div>
      <div class="flex justify-center">
        <div class="email-input-box flex items-center">
          <input
            class="w-full font-lato font-normal text-2xl ml-5 mr-5 outline-none"
            type="text"
            placeholder="Email address"
          />
          <div class="flex justify-end ml-auto mr-5">
            <button
              class="email-subscribe-btn text-white font-lato font-bold text-2xl"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.shadow {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding-top: 5%;
  padding-bottom: 5%;
}

.email-subscribe-btn {
  width: 140px;
  height: 56px;
  background: #00b4a7;
  border: 0.3px solid #142e46;
  box-sizing: border-box;
  border-radius: 1px;
  transition: background 0.1s ease-in-out;
}

.email-subscribe-btn:hover {
  background: #09887f;
}

.email-input-box {
  width: 640px;
  height: 80px;
  background: #f7f7f7;
  border: 1px solid #142e46;
  box-sizing: border-box;
  border-radius: 2.5px;
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SubscribeLP",
});
</script>
