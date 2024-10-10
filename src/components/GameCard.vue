<template>
    <div class="card-container w-full h-full" @click="selectCardHandler">
        <transition name="flip" mode="out-in">
          <div class="card" :class="{ flipped: card.isOpen }">
            <div class="card-face card-front">
                <img src="https://i.pinimg.com/originals/c1/59/b4/c159b4738dae9c9d8d6417228024de8d.jpg" alt="card" class="w-full h-full rounded-lg">
            </div>
            <div class="card-face card-back rounded-lg">
                {{ card.content }}
            </div>
          </div>
        </transition>
  </div>
</template>

<script setup lang="ts">
import Card from '@/lib/types.ts';
import { watch, ref } from 'vue';

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

<style scoped>

.card {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  cursor: pointer;
}

.card.flipped {
  transform: rotateY(180deg); /* Rotate card when flipped */
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; /* Hides the back side when flipped */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
}

.card-back {
  background-color: #fff; /* Red back */
  transform: rotateY(180deg); /* Back side is rotated initially */
}

/* Transition classes to smooth out the flip */
.flip-enter-active,
.flip-leave-active {
  transition: transform 0.6s ease;
}
</style>