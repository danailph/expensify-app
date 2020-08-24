import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'



test('should setup default expenses state', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'})
  expect(state).toEqual([])
})

test('should remove expense by id', () => {
  const state = expensesReducer(expenses, {type:'REMOVE_EXPENSE', id:expenses[1].id})
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if id not found', () => {
  const state = expensesReducer(expenses, {type:'REMOVE_EXPENSE', id: -1})
  expect(state).toEqual(expenses)
})

test('should add an expense', () => {
  const expense = {
    id: "4",
    description: 'phone',
    amount: 29500,
    createdAt: 200000,
    note: ''
  }
  const action = {
    type:'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, expense])
})

test('should edit an expense', () => {
  const action = {
    type:'EDIT_EXPENSE',
    id: "1",
    updates: {
      amount: 100
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state[0].amount).toBe(100)
})

test('should not edit an expense if expense not found', () => {
  const action = {
    type:'EDIT_EXPENSE',
    id: "-1",
    updates: {
      amount: 100
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})
