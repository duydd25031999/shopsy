<script setup>
import { defineProps } from 'vue';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const { product } = defineProps({
	product: {
		type: Object,
		default: () => ({})
	}
})
</script>
<template>
  <div
    class="space-y-3"
  >
    <img
			:src="product.img"
			alt=""
			class="h-[220px] w-[150px] object-cover rounded-md"
    />
    <div>
      <h3 class="font-semibold">{{product.title}}</h3>
      <p class="text-sm text-gray-600">{{product.color}}</p>
      <div class="flex items-center gap-1">
        <FontAwesomeIcon :icon="faStar" class="text-yellow-400" />
        <span>{{product.rating}}</span>
      </div>
    </div>
  </div>
</template>