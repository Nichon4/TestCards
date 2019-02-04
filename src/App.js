import React, { Component } from 'react'
import { BGDiv } from './layout/App'
import Cards from "./components/Cards";
import { Provider } from 'react-redux'
import { store } from "./components/index"


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
