<script setup>
import { defineProps } from "vue";
const { item } = defineProps({
	item: {
		type: Object,
		default: () => ({})
	}
});

</script>
<template>
  <div class="flex justify-center">
    <div class="grid grid-cols-1 sm:grid-cols-2 w-[95%]">
      <!-- {/* text content section */} -->
      <div
        class="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10"
      >
        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold">{{ item.title }}</h1>
        <p
          class="text-sm"
        >
          {{ item.description }}
        </p>
        <div>
          <button
            class="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
          >
            Order Now
          </button>
        </div>
      </div>
      <!-- {/* image section */} -->
      <div class="order-1 sm:order-2">
        <div class="relative z-10">
          <img
						:src="item.img"
						alt=""
						class="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
          />
        </div>
      </div>
    </div>
  </div>
</template>