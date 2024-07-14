<script setup>
import { Carousel, Slide, Navigation } from "vue3-carousel";
import TestimonialCard from "./TestimonialCard.vue";
import { TestimonialData } from "./testimonialData";
</script>

<template>
  <div class="py-10 mb-10">
    <div class="container">
      <!-- {/* header section /*/} -->
      <div class="text-center mb-10 max-w-[600px] mx-auto">
        <p data-aos="fade-up" class="text-sm text-primary">
          What our customers are saying
        </p>
        <h1 data-aos="fade-up" class="text-3xl font-bold">Testimonials</h1>
        <p data-aos="fade-up" class="text-xs text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
          asperiores modi Sit asperiores modi
        </p>
      </div>
      <!-- {/* Testimonial cards */} -->
      <div>
        <Carousel>
          <Slide v-for="testimonial in TestimonialData" :key="testimonial.id">
            <TestimonialCard :testimonial="testimonial" />
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>
