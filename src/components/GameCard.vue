<template>
    <div class="w-full h-full" @click="selectCardHandler">
      <transition name="flip" mode="out-in">
        <div class="card border" :class="{ flipped: card.isOpen || showCardsForMemorization }">
          <div class="card-face card-front" :class="reverseClasses">
            <slot name="reverse" />
          </div>
          <div class="card-face card-back rounded-lg">
            <slot name="content" />
          </div>
        </div>
      </transition>
  </div>
</template>

<script setup lang="ts">
import { Card } from '@/lib/types.ts';

const { card, reverseClasses = 'bg-blue-500', showCardsForMemorization } = defineProps<{ 
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