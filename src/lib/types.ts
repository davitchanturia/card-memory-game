export type GridSize = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type Card = {
    id: number;
    value: string;
    isOpen: boolean;
    isMatched: boolean;
    content: string;
}