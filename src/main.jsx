import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import reducer from './Components/Store/Todo.slice.js'
import testReducer from './Components/Store/Test.slice.js'
import { Provider } from 'react-redux'

export const store = configureStore({
  reducer: {
    Todo: reducer,
    Test: testReducer
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
