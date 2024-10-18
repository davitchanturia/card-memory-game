<template>
    <div class="game-container">
        <div class="card-grid" :style="{ 'grid-template-columns': `repeat(${responsiveGridSize}, minmax(0, 1fr))` }">
            <GameCard 
                v-for="card in cardsData" 
                :key="card.id" 
                :card 
                :style="{'height': cardHeight + 'px'}"
                @selectCard="selectCardHandler"
                :reverseClasses="reverseClasses"
                :showCardsForMemorization="showCardsForMemorization"
            >
            <template #reverse>
              <slot name="reverse"></slot>
            </template>

            <template #content>
              <slot name="content" :cardData="card"></slot>
            </template>
        </GameCard>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';
import GameCard from '@/components/GameCard.vue';
import { useCardActions } from '@/composables/useCardActions.ts';
import { GridSize } from '@/lib/types';

const { 
    gridSize, 
    cards = [],
    cardHeight = '400', 
    reverseClasses
} = defineProps<{ 
    gridSize: GridSize, 
    cards: any[], 
    cardHeight?: string | number,
    reverseClasses?: string | undefined 
}>();

const emit = defineEmits<{
    (event: 'allCardsAreMatched' ): void;
}>();

const { 
    cardsData, 
    allCardsMatched, 
    markCardAsOpened, 
    showCardsForMemorization,
    displayCards
} = useCardActions(cards);

displayCards();

watch(
    () => allCardsMatched.value,
    (newVal) => {
        if(newVal === true) emit('allCardsAreMatched'); 
    }
)

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

<style scoped>
.game-container {
    padding: 2rem;
    width: 100%;
    height: 100%;
}

.card-grid {
    display: grid;
    gap: 0.75rem;
}
</style>