import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from "./configureStore"
import { BGDiv } from './layout/App'
import Cards from "./components/Cards";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <div>
            <BGDiv/>
            <Cards/>
          </div>
      </Provider>
    );
  }
}

export default App;
