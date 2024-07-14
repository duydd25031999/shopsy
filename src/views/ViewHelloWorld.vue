<script setup>
import { ref } from 'vue';
import LayoutDefault from '../layout/LayoutDefault.vue';

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <LayoutDefault class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
    <div>
      <div class="text-xl font-medium text-black">ChitChat</div>
      <p class="text-gray-500">You have a new message!</p>
    </div>
    <div class="read-the-docs">Demo Scss</div>
  </LayoutDefault>
</template>

<style scoped lang="scss">
$textColor: #888;

.read-the-docs {
  color: $textColor;
}
</style>
