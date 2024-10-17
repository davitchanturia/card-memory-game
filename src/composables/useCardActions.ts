import { Card } from "@/lib/types";
import { reactive, computed, ref } from "vue";

export const useCardActions = (cards: Card[]) => {

    const shuffledCards = (array: Card[]) => {
        const arr = array;
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }

        return arr;
    }

    const cardsData = reactive<Card[]>(shuffledCards(cards));

    let comparableCards: Card[] = reactive([]);

    const allCardsMatched = computed<boolean>(() => {
        return cardsData.every(card => card.isMatched);
    });

    const closeAllUnmatchedCards = (): void => {
        cardsData.forEach(card => {
            if(!card.isMatched) {
                card.isOpen = false;
            }
        });
    }

    const pushCardToComparableCards = (card: Card): void => {
        if(comparableCards.length < 2) {
            comparableCards.push(card);
        } 

        if(comparableCards.length === 2) {
            const [firstCard, secondCard] = comparableCards;

            if(firstCard.value === secondCard.value) {
                firstCard.isMatched = true;
                secondCard.isMatched = true;

                comparableCards = []
            }else {
                setTimeout(() => {
                    comparableCards = []
                    closeAllUnmatchedCards()
                }, 900)
            }
        }
    };

    const markCardAsOpened = (cardId: number): void => {
        if(showCardsForMemorization.value) return;
        const card = cardsData.find(card => card.id === cardId);

        if (card) {
            card.isOpen = true;
            pushCardToComparableCards(card);
        } 
    };

    const showCardsForMemorization = ref(false);

    async function displayCards(): Promise<void> {
        await new Promise<void>(resolve => setTimeout(resolve, 1000));
        showCardsForMemorization.value = true;
        await new Promise<void>(resolve => setTimeout(resolve, 3000));
        showCardsForMemorization.value = false;
    };

    return { cardsData, markCardAsOpened, allCardsMatched, showCardsForMemorization, displayCards }
}