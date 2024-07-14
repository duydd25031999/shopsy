<script setup>
import lightPng from '@/assets/website/light-mode-button.png';
import darkPng from '@/assets/website/dark-mode-button.png';
import { useDark, useToggle } from '@vueuse/core';
import { watch } from 'vue';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
	<div class="relative" @click="toggleDark()">
		<img
			:src="lightPng"
			alt=""
			:class="`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${isDark ? 'opacity-0' : 'opacity-100'}`"
		/>
		<img
			:src="darkPng"
			alt=""
			class="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
    />
	</div>
</template>