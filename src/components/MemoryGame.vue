<template>
    <div class="bg-slate-400 p-8 w-full h-full">
        <div class="grid gap-3" :style="{ 'grid-template-columns': `repeat(${responsiveGridSize}, minmax(0, 1fr))` }">
            <GameCard 
                v-for="card in cardsData" 
                :key="card.id" 
                :card 
                :style="{'height': cardHeight + 'px'}"
                @selectCard="selectCardHandler"
            >{{card.id}}</GameCard>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';
import GridSize from '@/lib/types.ts';
import GameCard from '@/components/GameCard.vue';
import { useCardActions } from '@/composables/useCardActions.ts';

const { gridSize, numCards = 12, cards = [], cardHeight = '400' } = defineProps<{ 
    gridSize?: gridSize, 
    numCards?: number, 
    cards: any[], 
    cardHeight?: string | number
}>();

const { cardsData, markCardAsOpened } = useCardActions(cards)

const selectCardHandler = (cardId: number | string) => {
    markCardAsOpened(cardId);
}

const responsiveGridSize = computed(() => {
    if (window.innerWidth < 640) {
        return  gridSize - 4;
    } else if (window.innerWidth < 768) {
        return gridSize - 3;
    } else if (window.innerWidth < 1024) {
        return gridSize - 2;
    } else {
        return gridSize;
    }
})
</script>