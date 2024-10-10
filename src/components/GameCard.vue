<template>
    <div @click="selectCardHandler" class="bg-white rounded-lg shadow-md flex justify-center items-center hover:cursor-pointer">
        <div v-if="card.isOpen" class="w-full h-full">
           {{ card.content }}
        </div>

        <div v-else class="w-full h-full">
            <img src="https://i.pinimg.com/originals/c1/59/b4/c159b4738dae9c9d8d6417228024de8d.jpg" alt="card" class="w-full h-full rounded-lg">
        </div>
    </div>
</template>

<script setup lang="ts">
import Card from '@/lib/types.ts';
import { watch } from 'vue';

const { card } = defineProps<{ 
    card: Card, 
}>();

watch(() => card, (newVal, oldVal) => {
    console.log('card changed', newVal, oldVal)})

const emit = defineEmits<{
    (event: 'selectCard', payload: number | string): void;
}>();

const selectCardHandler = () => {
    emit('selectCard', card.id)
}
</script>