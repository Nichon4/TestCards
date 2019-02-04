import { ADD_CARD, REMOVE_CARD } from "./actions"
import { dropLast } from 'ramda'
import { cards as initialCards} from "../data/cards"

const initialState = initialCards;

function cards(state = initialState, action) {
  switch (action.type) {
    case ADD_CARD:
      return [
        ...state,
        {
          type: action.cardType
        }
      ];

    case REMOVE_CARD:
      return dropLast(1, state);

    default:
      return state
  }
}

export default cards
