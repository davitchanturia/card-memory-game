<template>
  <div>
    <MemoryGame :cards :grid-size="6"  @allCardsAreMatched="console.log('well done')">
        <template #content="{ cardData }">
            <div class="bg-red-500">{{ cardData.content }}</div> 
        </template>
    </MemoryGame>
  </div>
</template>

<script setup lang="ts">
import MemoryGame from '@/components/MemoryGame.vue'
import { Card } from './lib/types';

const cards: Card[] = [
    {
        id: 1,
        value: 'a',  
        isOpen: false,
        isMatched: false,
        content: "🍎"
    },
    {
        id: 2,
        value: 'a',  
        isOpen: false,
        isMatched: false,
        content: "🍎"
    },
    {
        id: 3,
        value: 'b',  
        isOpen: false,
        isMatched: false,
        content: "🍌"
    },
    {
        id: 4,
        value: 'b',  
        isOpen: false,
        isMatched: false,
        content: "🍌"
    },
    {
        id: 5,
        value: 'c',  
        isOpen: false,
        isMatched: false,
        content: "🍇"
    },
    {
        id: 6,
        value: 'c',  
        isOpen: false,
        isMatched: false,
        content: "🍇"
    },{
        id: 7,
        value: 'd',  
        isOpen: false,
        isMatched: false,
        content: "🍎"
    },
    {
        id: 8,
        value: 'd',  
        isOpen: false,
        isMatched: false,
        content: "🍎"
    },
    {
        id: 9,
        value: 'e',  
        isOpen: false,
        isMatched: false,
        content: "🍌"
    },
    {
        id: 10,
        value: 'e',  
        isOpen: false,
        isMatched: false,
        content: "🍌"
    },
    {
        id: 11,
        value: 'f',  
        isOpen: false,
        isMatched: false,
        content: "🍇"
    },
    {
        id: 12,
        value: 'f',  
        isOpen: false,
        isMatched: false,
        content: "🍇"
    }
];
</script>
