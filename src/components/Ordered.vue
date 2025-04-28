<script setup>
import { computed,  ref } from 'vue';

const showContent = ref(false)

function orderClicked() {
  showContent.value = true
}

const searchText = ref('')

const categories = ref([
  'Repetitor',
  'Ta\'mirlash ustasi',
  'Uy xodimlari',
  'It-freelancer',
  'Buxgalter / Advokat'
])
const filteredCategories = computed(() => {
  if (!searchText.value) {
    return categories.value
  }
  return categories.value.filter(item => 
    item.toLowerCase().includes(searchText.value.toLowerCase())
  )
})

const showPerson = ref(false)

function selectPerson(){
    showPerson.value = true
}


</script>
<template>
    <section class="py-4 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start">
    <div class="flex flex-col items-center md:items-start">
      <div class="selectOrder">
        <Button 
          class="py-4 px-6 text-lg sm:text-xl text-[#034833] bg-[#f1f1f1] rounded-2xl hover:bg-[#034833] hover:text-[#f1f1f1]"
          @click="orderClicked"
        >
          Buyurtma
        </Button>
      </div>
      <div class="selectPerson mt-4">
        <Button 
          @click="selectPerson"
          class="py-4 px-6 text-lg sm:text-xl text-[#034833] bg-[#f1f1f1] rounded-2xl hover:bg-[#034833] hover:text-[#f1f1f1]"
        >
          Mutaxassislar
        </Button>
      </div>
    </div>

    <div class="shoWOrder mx-0 md:mx-5 mt-8 md:mt-0 w-full md:w-auto">
      <div v-if="showContent" class="flex flex-col items-center">
        <h1 class="text-3xl sm:text-5xl md:text-6xl text-center text-[#034833] font-bold">Vazifani yozing</h1>
        <input 
          type="search" 
          v-model="searchText"
          placeholder="Qidiruv...."
          class="mt-8 px-5 py-3 w-full max-w-md text-lg sm:text-2xl bg-[#F5F5F5] rounded-2xl outline-none focus:ring-2 focus:ring-green-400"
        />
        <div class="flex gap-4 mt-6 flex-wrap justify-center">
          <div 
            v-for="(item, index) in filteredCategories" 
            :key="index"
            class="px-5 py-2 bg-[#F5F5F5] rounded-2xl text-gray-700 text-base sm:text-lg cursor-pointer hover:bg-lime-400 hover:text-white transition"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </div>

    <div class="showPerson mx-0 md:mx-5 mt-8 md:mt-0 w-full md:w-auto">
      <div v-if="showPerson" class="flex flex-col items-center">
        <h1 class="text-3xl sm:text-5xl md:text-6xl text-center text-[#034833] font-bold">Mutaxassislar Ro'yxati</h1>
      </div>
    </div>

  </section>
</template>
<style scoped>
    button {
        width: 200px;
        margin: 10px;
        cursor: pointer;
        font-weight: bold;
    }
</style>