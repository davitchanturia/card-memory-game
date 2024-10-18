<template>
  <div class="full-size" @click="selectCardHandler">
    <transition name="flip" mode="out-in">
      <div class="card border" :class="{ flipped: card.isOpen || showCardsForMemorization }">
        <div class="card-face card-front" :class="reverseClasses">
          <slot name="reverse" />
        </div>
        <div class="card-face card-back rounded">
          <slot name="content" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { Card } from '@/lib/types.ts';

const { card, reverseClasses = 'blue_background', showCardsForMemorization } = defineProps<{ 
    card: Card, 
    reverseClasses?: string | undefined,
    showCardsForMemorization: boolean
}>();

const emit = defineEmits<{
    (event: 'selectCard', payload: number): void;
}>();

const selectCardHandler = () => {
  if(!card.isMatched) emit('selectCard', card.id)
}
</script>

<style scoped>
.full-size {
  width: 100%;
  height: 100%;
}

.blue_background {
  background-color: blue;
}

.card {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  cursor: pointer;
}

.card.flipped {
  transform: rotateY(180deg);
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
}

.card-back {
  background-color: #fff;
  transform: rotateY(180deg);
  border-radius: 0.5rem; /* equivalent to rounded-lg */
}

.border {
  border-width: 1px;
  border-style: solid;
  border-color: #e5e7eb; /* Default border color, adjust as needed */
}

/* Transition classes to smooth out the flip */
.flip-enter-active,
.flip-leave-active {
  transition: transform 0.6s ease;
}

/* For the bg-blue-500 class */
.bg-blue-500 {
  background-color: #3b82f6;
}
</style>