import { createStore } from 'redux'
import cards from "./reducers"

export const store = createStore(
  cards,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
