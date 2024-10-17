<template>
    <div class="p-8 w-full h-full">
        <div class="grid gap-3" :style="{ 'grid-template-columns': `repeat(${responsiveGridSize}, minmax(0, 1fr))` }">
            <GameCard 
                v-for="card in cardsData" 
                :key="card.id" 
                :card 
                :style="{'height': cardHeight + 'px'}"
                @selectCard="selectCardHandler"
                :frontBgColor
            >
                <slot name="content" :cardData="card" ></slot>
        </GameCard>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import GameCard from '@/components/GameCard.vue';
import { useCardActions } from '@/composables/useCardActions.ts';
import { GridSize } from '@/lib/types';

const { 
    gridSize, 
    cards = [],
    cardHeight = '400', 
    frontBgColor = 'bg-blue-500' 
} = defineProps<{ 
    gridSize: GridSize, 
    cards: any[], 
    cardHeight?: string | number,
    frontBgColor?: string | undefined 
}>();

const { cardsData, markCardAsOpened } = useCardActions(cards)

const selectCardHandler = (cardId: number): void => {
    markCardAsOpened(cardId);
}

const responsiveGridSize = computed(() => {
    if (window.innerWidth < 640) {
        return gridSize - 4;
    } else if (window.innerWidth < 768) {
        return gridSize - 3;
    } else if (window.innerWidth < 1024) {
        return gridSize - 2;
    } else {
        return gridSize;
    }
})
</script>