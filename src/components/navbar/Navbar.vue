<script setup>
import Logo from "@/assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import DarkMode from "./DarkMode.vue";
import { Menu, DropdownLinks } from "./menu";
</script>

<template>
  <nav
    class="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40"
  >
    <!-- Upper Navbar -->
    <div class="bg-primary/40 py-2">
      <div class="container flex justify-between items-center">
        <!-- Left -->
        <div>
          <a
            href="#"
            class="font-bold text-2xl sm:text-3xl flex gap-2 items-center"
          >
            <img :src="Logo" alt="Logo" class="w-10" />
            <span>Shopsy</span>
          </a>
        </div>
        <!-- Right -->
        <div class="flex justify-between items-center gap-4">
          <!-- Search -->
          <div class="group relative hidden sm:block">
            <input
              type="text"
              placeholder="Search"
              class="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
            />
            <font-awesome-icon
              :icon="faMagnifyingGlass"
              class="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3"
            />
          </div>
          <!-- Order -->
          <button
            class="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
          >
            <span class="group-hover:block hidden transition-all duration-200"
              >Order</span
            >
            <font-awesome-icon
              :icon="faCartShopping"
              class="text-xl text-white drop-shadow-sm cursor-pointer"
            />
          </button>
          <!-- Dark mode -->
          <div>
            <DarkMode />
          </div>
        </div>
      </div>
    </div>
    <!-- Lower Navbar -->
    <div class="flex justify-center">
      <ul class="sm:flex hidden items-center gap-4">
        <!-- Main menu -->
        <li v-for="menuItem in Menu" :key="menuItem.id">
          <a
            :href="menuItem.link"
            class="inline-block px-4 hover:text-primary duration-200"
            >{{ menuItem.name }}</a
          >
        </li>
        <!-- Trending -->
        <li class="group relative cursor-pointer">
          <a href="#" class="flex items-center gap-1 py-2">
            <span>Trending Products</span>
            <span>
              <font-awesome-icon
                :icon="faCaretDown"
                class="transition-all duration-200 group-hover:rotate-180"
              />
            </span>
          </a>
          <div
            class="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md dark:bg-gray-900 dark:text-white"
          >
            <ul>
              <li v-for="linkItem in DropdownLinks" :key="linkItem.id">
                <a
                  :href="linkItem.link"
                  className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                >
                  {{ linkItem.name }}
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>