import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import configureStore, { history } from "./configureStore"

import { BGDiv } from './layout/App'
import Cards from "./components/Cards";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <BGDiv/>
            <Cards/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
