import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter.js'
import {Provider} from 'react-redux'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'

import configureStore from './store/configureStore'
import {addExpense, removeExpense, ditExpense} from './actions/expenses'
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'


const store = configureStore()
store.dispatch(addExpense({description: 'Water Bill', amount: 100, createdAt: 1000}))
store.dispatch(addExpense({description: 'Gas Bill', amount: 140, createdAt: 1300}))
store.dispatch(addExpense({description: 'Rent', amount: 1410, createdAt: 1100}))


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>

)

ReactDOM.render(jsx, document.getElementById('app'))
