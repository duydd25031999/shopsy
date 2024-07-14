<script setup>
import { defineProps } from 'vue';

const { testimonial } = defineProps({
	testimonial: {
		type: Object,
		default: () => ({})
	}
})
</script>

<template>
  <div class="my-6">
    <div
      class="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
    >
      <div class="mb-4">
        <img :src="testimonial.img" alt="" class="rounded-full w-20 h-20" />
      </div>
      <div class="flex flex-col items-center gap-4">
        <div class="space-y-3">
          <p class="text-xs text-gray-500">{{ testimonial.text }}</p>
          <h1 class="text-xl font-bold text-black/80 dark:text-light">
          	{{ testimonial.name }}
          </h1>
        </div>
      </div>
      <p class="text-black/20 text-9xl font-serif absolute top-0 right-0">
        ,,
      </p>
    </div>
  </div>
</template>
