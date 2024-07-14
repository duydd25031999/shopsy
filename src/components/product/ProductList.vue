<script setup>
import ProductCard from './ProductCard.vue';
import { ProductArray } from './productArray';
</script>
<template>
  <section class="mt-14 mb-12">
    <div class="container">
      <!-- {/* Header section */} -->
      <div class="text-center mb-10 max-w-[600px] mx-auto">
        <p data-aos="fade-up" className="text-sm text-primary">
          Top Selling Products for you
        </p>
        <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
        <p data-aos="fade-up" className="text-xs text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
          asperiores modi Sit asperiores modi
        </p>
      </div>
      <!-- {/* Body section */} -->
      <div>
        <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
					<ProductCard v-for="product in ProductArray" :key="product.id" :product="product" />
				</div>
      </div>
      <!-- {/* view all button */} -->
      <div className="flex justify-center">
        <button
          className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md"
        >
          View All Button
        </button>
      </div>
    </div>
  </section>
</template>