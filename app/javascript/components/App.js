import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HelloWorld from "./HelloWorld"
import store from '../redux/configureStore'
import { Provider } from 'react-redux';

class App extends React.Component {
  render () {
    return (
      <Provider store={store} >
        <BrowserRouter>
          <Routes>
            <Route exact path="" element={<HelloWorld greeting="HelloHello"/>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
