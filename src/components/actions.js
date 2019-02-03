// Action Types

export const ADD_CARD = 'ADD_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';

// Generators

export function addCard(cardType) {
  return { type: ADD_CARD, cardType}
}

export function removeCard() {
 return { type: REMOVE_CARD }
}