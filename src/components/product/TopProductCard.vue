<script setup>
import { defineProps } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const { product } = defineProps({
  product: {
    type: Object,
    default: () => ({}),
  },
});
</script>
<template>
  <div
    data-aos="zoom-in"
    class="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
  >
    <!-- {/* image section */} -->
    <div class="h-[100px]">
      <img
      	:src="product.img"
        alt=""
        class="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
      />
    </div>
    <!-- {/* details section */} -->
    <div class="p-4 text-center">
      <!-- {/* star rating */} -->
      <div class="w-full flex items-center justify-center gap-1">
        <FontAwesomeIcon :icon="faStar" class="text-yellow-500" />
        <FontAwesomeIcon :icon="faStar" class="text-yellow-500" />
        <FontAwesomeIcon :icon="faStar" class="text-yellow-500" />
        <FontAwesomeIcon :icon="faStar" class="text-yellow-500" />
      </div>
      <h1 class="text-xl font-bold">{{ product.title }}</h1>
      <p
        class="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2"
      >
      	{{ product.description }}
      </p>
      <button
        class="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
      >
        Order Now
      </button>
    </div>
  </div>
</template>