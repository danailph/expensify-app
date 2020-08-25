import {
  startAddExpense, addExpense,
  editExpense,
  startRemoveExpense, removeExpense,
  startSetExpenses, setExpenses} from '../../actions/expenses'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])
beforeEach((done) => {
  const expensesData = {}
  expenses.forEach(({id, description, amount, note, createdAt}) => {
    expensesData[id] = {description, note, amount, createdAt}
  });

  database.ref('expenses').set(expensesData).then(() => { done()})
})

test('should setup remove expense action object', () => {
  const action = removeExpense({id:'123abc'})
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('should setup edit expense action object', () => {
  const action = editExpense( "123abc", {description: "new"})
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id:'123abc',
    updates:{description: 'new'}
  })
})

test('should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[2])
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  })
})

test('should add expense to database and store', (done) => {
  const store = createMockStore({})
  const expenseData = {description:'Bill', amount: 3000, note:'', createdAt: 1000}
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        ...expenseData,
        id: expect.any(String)
      }
    })
    return  database.ref(`expenses/${actions[0].expense.id}`).once('value')
  }).then( (snapshot) => {
    expect(snapshot.val()).toEqual(expenseData)
    done()
  })
})


test('should add expense to database and store with default values', (done) => {
  const store = createMockStore({})
  const defaultData = {description:'', amount: 0, note:'', createdAt: 0}
  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        ...defaultData,
        id: expect.any(String)
      }
    })
    return  database.ref(`expenses/${actions[0].expense.id}`).once('value')
  }).then( (snapshot) => {
    expect(snapshot.val()).toEqual(defaultData)
    done()
  })
})

test('should setup set expenses action object with data', () => {
  const action = setExpenses(expenses)
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
})

test('should fetch expenses from firebase', (done) => {
  const store = createMockStore({})
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    })
  done()
  })
})

test('should remove expense from firebase', (done) => {
  const store = createMockStore({})
  const id = expenses[0].id
  store.dispatch(startRemoveExpense({id})).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id
    })
    return database.ref(`expenses/${id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy()
    done()
  })
})
