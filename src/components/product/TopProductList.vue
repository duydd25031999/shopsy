<script setup>
import TopProductCard from "./TopProductCard.vue";
import { TopProductArray } from "./productArray";
</script>
<template>
  <section>
    <div class="container">
      <!-- {/* Header section */} -->
      <div class="text-left mb-24">
        <p data-aos="fade-up" class="text-sm text-primary">
          Top Rated Products for you
        </p>
        <h1 data-aos="fade-up" class="text-3xl font-bold">Best Products</h1>
        <p data-aos="fade-up" class="text-xs text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
          asperiores modi Sit asperiores modi
        </p>
      </div>
      <!-- {/* Body section */} -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center"
      >
        <TopProductCard
          v-for="product in TopProductArray"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </section>
</template>