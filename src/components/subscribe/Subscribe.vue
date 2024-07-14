<script setup>
import { computed } from "vue";
import BannerImg from "../../assets/website/orange-pattern.jpg";

const BannerStyle = computed(() => ({
  backgroundImage: `url(${BannerImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
}));
</script>

<template>
  <div class="mb-20 bg-gray-100 dark:bg-gray-800 text-white " :style="BannerStyle">
    <div class="container backdrop-blur-sm py-10">
      <div class="space-y-6 max-w-xl mx-auto">
        <h1
          class="text-2xl !text-center sm:text-left sm:text-4xl font-semibold"
        >
          Get Notified About New Products
        </h1>
        <input
          data-aos="fade-up"
          type="text"
          placeholder="Enter your email"
          class="w-full p-3"
        />
      </div>
    </div>
  </div>
</template>
