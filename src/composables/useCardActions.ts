import { Card } from "@/lib/types";
import { reactive, computed } from "vue";

export const useCardActions = (cards: Card[]) => {

    const cardsData = reactive<Card[]>(cards);

    let comparableCards: Card[] = reactive([]);

    const allCardsMatched = computed(() => {
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
        const card = cardsData.find(card => card.id === cardId);

        if (card) {
            card.isOpen = true;
            pushCardToComparableCards(card);
        } 
    };

    return { cardsData, markCardAsOpened, allCardsMatched }
}