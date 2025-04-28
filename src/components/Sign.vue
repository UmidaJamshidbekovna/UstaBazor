<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100 px-4">
    <form action="#" class="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md">
      <div class="space-y-4">
        <div>
          <label for="name" class="block text-base sm:text-lg font-semibold">Ismingizni kiriting:</label>
          <input type="text" name="name" id="name" required placeholder="Ism..." 
            class="w-full p-3 mt-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-green-400 text-sm sm:text-base" />
        </div>
        <div>
          <label for="email" class="block text-base sm:text-lg font-semibold">Email kiriting:</label>
          <input type="email" name="email" id="email" required placeholder="Email ..." 
            class="w-full p-3 mt-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-green-400 text-sm sm:text-base" />
        </div>
        <div>
          <label for="phone" class="block text-base sm:text-lg font-semibold">Tel raqam:</label>
          <input type="tel" name="phone" id="phone" required placeholder="Tel ..." 
            class="w-full p-3 mt-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-green-400 text-sm sm:text-base" />
        </div>
        <button 
          class="w-full py-3 mt-6 bg-[#034833] text-white rounded-2xl hover:bg-lime-400 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm sm:text-base">
          Yuborish
        </button>
      </div>
    </form>
  </div>
</template>
