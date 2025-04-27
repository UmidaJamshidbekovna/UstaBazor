<script setup>
import { ref } from 'vue';




</script>
<template>
    <section class="py-4 mx-auto  px-4 sm:px-6 lg:px-8">
        <div>
            <div>
                <Button 
                    class="py-5 text-xl text-[#034833] bg-[#f1f1f1] rounded-2xl hover:bg-[#034833] hover:text-[#f1f1f1]"
                    @clicked="OrderClicked"
                    >Buyurtma</Button>
            </div>
            <div>
                <Button class="py-5 text-xl text-[#034833] bg-[#f1f1f1] rounded-2xl hover:bg-[#034833] hover:text-[#f1f1f1]">Mutaxassislar</Button>
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