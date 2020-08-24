import filtersReducer from '../../reducers/filters'
import moment from 'moment'

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date', //date or amount
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
}

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, {type: '@@INIT'})
  expect(state).toEqual({
    ...filtersReducerDefaultState
  })
})


test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'})
  expect(state.sortBy).toEqual('amount')
})

test('should set sortBy to date', () => {
  const currentState={
    ...filtersReducerDefaultState,
    sortBy: 'amount', //date or amount
  }
  const state = filtersReducer(currentState, {type: 'SORT_BY_DATE'})
  expect(state.sortBy).toEqual('date')
})

test('should set text filter', () => {
  const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text: 'Rent'})
  expect(state.text).toBe('Rent')
})


test('should set startDate filter', () => {
  const state = filtersReducer(
    filtersReducerDefaultState,
    {type: 'SET_START_DATE', date: moment(0)}
  )
  expect(state.startDate).toEqual(moment(0))
})

test('should set endDate filter', () => {
  const state = filtersReducer(
    filtersReducerDefaultState,
    {type: 'SET_END_DATE', date: moment(0)}
  )
  expect(state.endDate).toEqual(moment(0))
})
