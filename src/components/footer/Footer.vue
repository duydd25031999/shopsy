<script setup>
import { computed } from "vue";
import BackgroundImage from "../../assets/website/footer-pattern.jpg";
import footerLogo from "../../assets/logo.png";
import { FooterLinks } from "./footerLinks";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";


const backgroundStyle = computed(() => ({
  backgroundImage: `url(${BackgroundImage})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
}));
</script>

<template>
  <div :style="backgroundStyle">
    <div class="container">
      <div data-aos="zoom-in" class="grid md:grid-cols-3 pb-44 pt-5">
        <!-- {/* company details */} -->
        <div class="py-8 px-4">
          <h1
            class="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3"
          >
            <img :src="footerLogo" alt="" class="max-w-[50px]" />
            Shopsy
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
            beatae ea recusandae blanditiis veritatis.
          </p>
        </div>
        <!-- {/* Footer Links */} -->
        <div class="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
          <div>
            <div class="py-8 px-4">
              <h1
                class="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3"
              >
                Important Links
              </h1>
              <ul class="flex flex-col gap-3">
                <li
                  v-for="link in FooterLinks"
                  :key="link.title"
                  class="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                >
                  <span>{{ link.title }}</span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div class="py-8 px-4">
              <h1
                class="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3"
              >
                Links
              </h1>
              <ul class="flex flex-col gap-3">
                <li
                  v-for="link in FooterLinks"
                  :key="link.title"
                  class="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                >
                  <span>{{ link.title }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- {/* social links */} -->
        <div>
          <div class="flex items-center gap-3 mt-6">
            <a href="#">
              <FontAwesomeIcon
                :icon="faInstagram"
                class="text-3xl text-white"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon :icon="faFacebook" class="text-3xl text-white" />
            </a>
            <a href="#">
              <FontAwesomeIcon :icon="faLinkedin" class="text-3xl text-white" />
            </a>
          </div>
          <div className="mt-6">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon :icon="faLocationDot" />
              <p>Noida, Uttar Pradesh</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FontAwesomeIcon :icon="faPhone"  />
              <p>+91 123456789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
