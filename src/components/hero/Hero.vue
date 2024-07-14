<script setup>
import { ImageList } from "./imageList";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import HeroItem from './HeroItem.vue';
</script>
<template>
  <section
    class="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
  >
		<div class="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 -translate-y-10 right-0 rounded-3xl rotate-45 -z[8]"></div>
    <div class="container pb-8 sm:pb-0">
      <Carousel>
        <Slide v-for="img in ImageList" :key="img.id">
					<HeroItem :item="img" />
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </section>
</template>