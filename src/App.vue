<template>
  <div>
    <MemoryGame :cards />
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import MemoryGame from '@/components/MemoryGame.vue'

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
