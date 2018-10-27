import React, { Component } from 'react';
import Routing from './components/Routing';
import { Provider } from 'react-redux';
import configureStore from './store/config';

export const { store } = configureStore();

export default class App extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
          <Routing/>
      </Provider>
    );
  }
}
