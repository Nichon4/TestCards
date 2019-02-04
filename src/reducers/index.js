import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import cards from "../components/reducers"

export default (history) => combineReducers({
  cards: cards,
  router: connectRouter(history),
})
