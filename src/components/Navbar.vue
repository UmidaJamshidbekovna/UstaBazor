<script setup>
import { ref } from 'vue'
import navLogo from "@/assets/img/navLogo.png"
import Hero from "@/components/Hero.vue"

const isMenuOpen = ref(false)
</script>

<template>
  <header class="bg-white shadow-sm">
    <section class="py-4">
      <div class="mx-auto  px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        <!-- Logo -->
        <div class="w-32 sm:w-40 cursor-pointer">
          <img :src="navLogo" alt="Logo" />
        </div>

        <!-- Region Select -->
        <div class="hidden sm:block">
          <select class="font-mono font-normal text-base sm:text-lg lg:text-xl tracking-tight border-none border-gray-300 rounded-md px-3 py-1">
            <option value="">Regions</option>
            <option>Toshkent</option>
            <option>Xorazm</option>
            <option>Navoiy</option>
          </select>
        </div>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex space-x-6">
          <RouterLink to="/" class="font-mono text-lg lg:text-2xl text-[#034833] hover:text-emerald-400 hover:underline cursor-pointer">Mutaxassislar</RouterLink>
          <RouterLink to="/work" class="font-mono text-lg lg:text-2xl text-[#034833] hover:text-emerald-400 hover:underline cursor-pointer">Mijozlar</RouterLink>
        </nav>

        <!-- Kirish Button -->
        <div class="hidden sm:block">
          <button class="bg-[#034833] hover:bg-emerald-700 text-white py-2 px-6 rounded-xl transition duration-300 cursor-pointer">
            Kirish
          </button>
        </div>

        <!-- Mobile menu toggle -->
        <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-[#034833] focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="md:hidden px-4 pt-2 space-y-2">
        <RouterLink to="/" class="block text-[#034833] font-mono text-lg hover:text-emerald-500">Mutaxassislar</RouterLink>
        <RouterLink to="/work" class="block text-[#034833] font-mono text-lg hover:text-emerald-500">Mijozlar</RouterLink>
        <select class="w-full font-mono mt-2 border border-gray-300 rounded-md px-3 py-1">
          <option value="">Regions</option>
          <option>Toshkent</option>
          <option>Xorazm</option>
          <option>Navoiy</option>
        </select>
        <button class="w-full mt-2 bg-[#034833] hover:bg-emerald-700 text-white py-2 px-4 rounded-lg">
          Kirish
        </button>
      </div>
    </section>
    <RouterView />
  </header>
  <Hero/>
</template>
