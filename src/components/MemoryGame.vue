<template>
    <div class="bg-red-400 p-8 w-full h-full">
        <div class="grid gap-3" :style="{ 'grid-template-columns': `repeat(${gridSize}, minmax(0, 1fr))` }">
            <GameCard v-for="card in updatedCards" class="bg-red-200" :style="{'height': cardHeight + 'px'}">{{card.id}}</GameCard>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import GridSize from '@/lib/types.ts';
import GameCard from '@/components/GameCard.vue';

const { gridSize = 6, numCards = 12, cards = [], cardHeight = '400' } = defineProps<{ 
    gridSize: gridSize, 
    numCards: number, 
    cards: any[], 
    cardHeight: string | number
}>()

const updatedCards = computed(() => {
    if(cards.length === 0)
        return [...Array(numCards).keys()].map(i => ({ id: i, isFlipped: false }));

    return cards
})
</script>