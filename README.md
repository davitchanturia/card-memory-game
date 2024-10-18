# Vue Card Memory Game

A fun and interactive card memory game built with Vue and typescript.

## Get Started

install the module via npm

```bash
npm i vue-card-memory-game@latest
```

### Usage
```
import MemoryGame from 'vue-card-memory-game';
import 'vue-card-memory-game/dist/style.css';

<template>
  <div>
    <MemoryGame :cards :grid-size="6" />
  </div>
</template>
```

### Structure of card object

```
type Card = {
    id: number;
    value: string;
    isOpen: boolean;
    isMatched: boolean;
    content: string;
}
```

### Props

| Prop Name  | Type       | Default Value | Description                               |
|------------|------------|---------------|-------------------------------------------|
| `gridSize`  | Number     |    6  | The grid number. Must be an Integer number between 2 and 10       |
| `cards` | Array    | []      | array of data |
| `cardHeight` | String     | `400`          | Card height    |
| `reverseClasses` | String     |           | Classes for reversed side of card   |
| `allCardsAreMatched` | Function     |     () => undefined	      | Optional callback triggered when the game is finished (all pairs found)
   |

### Slots

| Prop Name  | Description                               |
|------------|-------------------------------------------|
| `reverse`  | place for card's reversed side    |
| `content`  | place for card's content |

### License

MIT