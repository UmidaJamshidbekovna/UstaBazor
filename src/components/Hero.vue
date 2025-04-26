<script setup>
// <!-- images -->
import heroNav from "@/assets/img/heroNav.png"
import workingSession from "@/assets/img/workingSession.png"
import vector2 from "@/assets/img/Vector2.png"
import vector3 from "@/assets/img/Vector3.png"
import vector4 from "@/assets/img/Vector4.png"
import vector5 from "@/assets/img/Vector5.png"

// <!-- Data Jsons -->
import mutaxassislar from "@/data/mutaxassislar.json"
import xizmat from "@/data/xizmatlar_turlari.json"

</script>

<template>
  <section class="main-hero bg-[#034833] py-12 md:py-16 overflow-hidden">
    <div class="hero max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        <!-- Chap taraf -->
        <div class="hero-left w-full md:w-1/2 space-y-6 text-center md:text-left">
        <h1 class="text-white text-4xl sm:text-5xl md:text-6xl lg:text-[76px] leading-tight md:leading-[1.1] font-bold">
            Eng <span class="text-[#83cd20]">yaxshi</span><br />
            mutaxassislarni<br />
            <span class="text-[#83cd20]">osongina</span> toping!
        </h1>
        <p class="text-white text-base sm:text-lg md:text-xl lg:text-2xl">
            Ustalar, xizmatlar va mutaxassislar bir joyda!
        </p>
        </div>

        <!-- O'ng taraf (rasm) -->
        <div class="hero-right w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img :src="heroNav" alt="Multitasking Person" class="w-[80%] sm:w-[70%] md:w-full max-w-[500px]" />
        </div>

    </div>
   </section>

  <section class="listingJobs mt-12">
    <h1 class="font-bold text-[#034833] text-5xl leading-14 text-center">
        Mutaxassislar ro‘yxati
    </h1>
    <div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 cursor-pointer">
      <div
        v-for="item in mutaxassislar"
        :key="item.id"
        class="border border-gray-300 rounded-xl p-6 shadow hover:shadow-lg transition"
      >
        <h2 class="text-xl font-semibold text-[#034833] mb-2">{{ item.name }}</h2>
        <p class="text-gray-700">{{ item.details }}</p>
      </div>
    </div>
    <div class="flex justify-center mt-8">
        <button class="bg-[#034833] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-[#026b4a] transition cursor-pointer">
            Barcha kasblar
        </button>
    </div>
  </section>

  <section class="mx-auto sm:px-8 lg:px-12 my-30">
    <h1 class="text-[#034833] text-6xl">Uzbekistondagi mutaxassislar</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12 cursor-pointer">
        <div
             v-for="(items, category) in xizmat" 
             :key="category"
             class="text-white  bg-[#034833] hover:bg-[#83CD20] rounded-xl p-6 shadow hover:shadow-lg relative"
        >
             <h2 class="font-bold text-3xl text-white">{{ category }}</h2>
             <ul>
                <li v-for="(item, index) in items" :key="index" class="text-[#fff] leading-8">{{ item }}</li>
            </ul>
            <button class="font-bold bg-white text-[#034833] hover:bg-[#034833] hover:text-white text-xl py-3 px-12 rounded shadow-2xl absolute bottom-[-1] right-0 cursor-pointer">
              Barcha  1854 fan
            </button>
        </div>
    </div>
   
  </section>

  <section class="workingSession mx-auto sm:px-8 lg:px-12 my-30">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
    <div>
      <h1 class="text-4xl sm:text-6xl lg:text-7xl text-[#034833] font-semibold mb-6">
        <span class="block font-bold text-[#034833] text-5xl sm:text-7xl">UstaBozor</span>
        Qanday ishlaydi?
      </h1>
    </div>
    <div>
      <img :src="workingSession" alt="" class="w-full object-contain" />
    </div>
    </div>

    <!-- <div class="relative mx-10 items-center space-x-4">
  <div class="relative">
    <i class="pi pi-file text-[#83CD20] text-8xl"></i>
    <h3 class="text-4xl font-semibold text-[#034833]">Buyurtma qoldiring</h3>
    <p class="text-2xl text-gray-600">Nimaga ehtiyojingiz borligini oddiy shaklda yozing</p>
    <div class="absolute top-[-70px] right-80 w-150 hidden lg:block">
      <img :src="vector2" alt="">
    </div>
  </div>

  <div class="absolute right-0 top-53">
    <div class="relative">
      <i class="pi pi-comment text-[#83CD20] text-8xl"></i>
      <h3 class="text-4xl font-semibold text-[#034833]">Buyurtma qoldiring</h3>
      <p class="text-2xl text-gray-600">Nimaga ehtiyojingiz borligini oddiy shaklda yozing</p>
      <div class="absolute top-35 right-20 w-200 hidden lg:block">
        <img :src="vector3" alt="">
      </div>
    </div>
  </div>

  <div class="absolute left-0 top-110">
    <i class="pi pi-check-circle text-[#83CD20] text-8xl"></i>
    <h3 class="text-4xl font-semibold text-[#034833]">Buyurtma qoldiring</h3>
    <p class="text-2xl text-gray-600">Nimaga ehtiyojingiz borligini oddiy shaklda yozing</p>
    <div class="absolute top-60 left-0 w-200 hidden lg:block">
      <img :src="vector4" alt="">
    </div>
  </div>

  <div class="absolute right-0 top-160">
    <i class="pi pi-credit-card text-[#83CD20] text-8xl"></i>
    <h3 class="text-4xl font-semibold text-[#034833]">Buyurtma qoldiring</h3>
    <p class="text-2xl text-gray-600">Nimaga ehtiyojingiz borligini oddiy shaklda yozing</p>
    <div class="absolute top-50 right-10 w-150 hidden lg:block">
      <img :src="vector5" alt="">
    </div>
  </div>

  <div class="absolute top-310 left-[50%]">
    <button class="pi pi-send bg-green-600 text-white px-10 py-6 rounded-full hover:bg-green-700 border-none">
      Buyurtma berish
    </button>
  </div>
</div> -->

  </section>

  <section class="bg-[#004333] px-4 sm:px-8 lg:px-12">
    <!-- Social Icons -->
    <div class=" py-10">
      <div class="flex justify-center sm:justify-end items-center space-x-6 text-3xl">
        <span class="pi pi-facebook text-white cursor-pointer hover:text-[#83CD20]"></span>
        <span class="pi pi-instagram text-white cursor-pointer hover:text-[#83CD20]"></span>
        <span class="pi pi-linkedin text-white cursor-pointer hover:text-[#83CD20]"></span>
        <span class="pi pi-pinterest text-white cursor-pointer hover:text-[#83CD20]"></span>
      </div>
    </div>

    <hr class="border-gray-500 my-4" />

    <!-- Grid Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10">
      <!-- Useful Links -->
      <div class="usefulLink">
        <h2 class="text-white text-2xl font-bold">Useful Link</h2>
        <nav>
          <ul class="mt-6 space-y-2">
            <li class="text-lg text-white hover:text-[#83CD20]">
              <a href="#">> Latest News</a>
            </li>
            <li class="text-lg text-white hover:text-[#83CD20]">
              <a href="#">> Careers</a>
            </li>
            <li class="text-lg text-white hover:text-[#83CD20]">
              <a href="#">> General Inquiries</a>
            </li>
            <li class="text-lg text-white hover:text-[#83CD20]">
              <a href="#">> Case Studies</a>
            </li>
          </ul>
        </nav>
      </div>

      <!-- Service Menu -->
      <div class="usefulLink">
        <h2 class="text-white text-2xl font-bold">Service Menu</h2>
        <nav>
          <ul class="mt-6 space-y-2">
            <li class="text-lg text-white hover:text-[#83CD20]">
              <a href="#">> Latest News</a>
            </li>
            <li class="text-lg text-white hover:text-[#83CD20]">
              <a href="#">> Careers</a>
            </li>
            <li class="text-lg text-white hover:text-[#83CD20]">
              <a href="#">> General Inquiries</a>
            </li>
            <li class="text-lg text-white hover:text-[#83CD20]">
              <a href="#">> Case Studies</a>
            </li>
          </ul>
        </nav>
      </div>

      <!-- Latest News -->
      <div class="usefulLink">
        <h2 class="text-white text-2xl font-bold">Latest News</h2>
        <nav>
          <ul class="mt-6 space-y-2">
            <li class="text-lg text-white hover:text-[#83CD20]">
              <a href="#">> Latest News</a>
            </li>
            <li class="text-lg text-white hover:text-[#83CD20]">
              <a href="#">> Careers</a>
            </li>
            <li class="text-lg text-white hover:text-[#83CD20]">
              <a href="#">> General Inquiries</a>
            </li>
            <li class="text-lg text-white hover:text-[#83CD20]">
              <a href="#">> Case Studies</a>
            </li>
          </ul>
        </nav>
      </div>

      <!-- Subscription -->
      <div class="usefulLink">
        <h2 class="text-white text-2xl font-bold">Bizning obuna bo'ling</h2>
        <div class="mt-6 relative">
          <input v-model="email" class="w-full bg-white pl-4 pr-16 py-3 rounded-3xl outline-none" placeholder="Your E-mail" />
          <button class="pi pi-send absolute right-2 top-1/2 transform -translate-y-1/2 p-3 rounded-full text-white bg-[#83CD20] hover:bg-[#76b31a]"></button>
        </div>
      </div>
    </div>

    <hr class="border-gray-500" />

    <!-- Copyright -->
    <div class="py-4 text-center">
      <h2 class="text-white text-lg">© UstaBozor. Barcha huquqlar himoyalangan.</h2>
    </div>
  </section>





</template>
