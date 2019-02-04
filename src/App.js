import React, { Component } from 'react'
import { BGDiv } from './layout/App'
import Cards from "./components/Cards"
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from "./configureStore"

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <BGDiv/>
            <Cards/>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
