<script setup>
import BannerImg from "../../assets/women/women2.jpg";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserLock, faTruckFast, faCashRegister, faComments } from "@fortawesome/free-solid-svg-icons";

</script>

<template>
  <section class="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
    <div class="container">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
        <!-- {/* image section */} -->
        <div data-aos="zoom-in">
          <img
            :src="BannerImg"
            alt=""
            class="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
          />
        </div>

        <!-- {/* text details section */} -->
        <div class="flex flex-col justify-center gap-6 sm:pt-0">
          <h1 data-aos="fade-up" class="text-3xl sm:text-4xl font-bold">
            Winter Sale upto 50% Off
          </h1>
          <p
            data-aos="fade-up"
            class="text-sm text-gray-500 tracking-wide leading-5"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
            reiciendis inventore iste ratione ex alias quis magni at optio
          </p>
          <div class="flex flex-col gap-4">
            <div data-aos="fade-up" class="flex items-center gap-4">
              <FontAwesomeIcon :icon="faUserLock"  class="shadow-sm text-2xl p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
              <p>Quality Products</p>
            </div>
            <div data-aos="fade-up" class="flex items-center gap-4">
              <FontAwesomeIcon :icon="faTruckFast"  class="shadow-sm text-2xl p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
              <p>Fast Delivery</p>
            </div>
            <div data-aos="fade-up" class="flex items-center gap-4">
							<FontAwesomeIcon :icon="faCashRegister"  class="shadow-sm text-2xl p-4 rounded-full bg-green-100 dark:bg-green-400" />
              <p>Easy Payment method</p>
            </div>
            <div data-aos="fade-up" class="flex items-center gap-4">
              <FontAwesomeIcon :icon="faComments"  class="shadow-sm text-2xl p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
              <p>Get Offers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
