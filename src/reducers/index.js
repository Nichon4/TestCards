import { combineReducers } from 'redux'
import cards from "../components/reducers"
import undoable from 'redux-undo'

export default () => combineReducers({
  cards: undoable(cards),
})
