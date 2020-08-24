import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should render ExpenseForm correctly',() => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseForm with expense data',() => {
  const wrapper = shallow(<ExpenseForm buttonText="Edit Expense"
  expense={expenses[0]}/>)
  expect(wrapper).toMatchSnapshot()
})

test('should render error for invalid form submission',() => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  })
  expect(wrapper.state('error')).toBe(true)
  expect(wrapper).toMatchSnapshot()
})

test('should set description on input change', () => {
  const newDescription = "New Description"
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(0).simulate('change', {
    target: { value: newDescription }
  })
  expect(wrapper.state('description')).toBe(newDescription)
})

test('should set note on textarea change', () => {
  const newNote = "New Note"
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('textarea').at(0).simulate('change', {
    target: { value: newNote }
  })
  expect(wrapper.state('note')).toBe(newNote)
})

test('should set amount if valid input', () => {
  const newAmount = "12.50"
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(1).simulate('change', {
    target: { value: newAmount }
  })
  expect(wrapper.state('amount')).toBe(newAmount)
})

test('should not set amount if invalid input', () => {
  const newAmount = "12.550"
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(1).simulate('change', {
    target: { value: newAmount }
  })
  expect(wrapper.state('amount')).toBe('')
})

test('should call onSubmit prop for valid dorm submission', () => {
  const onSubmitSpy = jest.fn()
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  })
  expect(wrapper.state('error')).toBe(false)
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    note: expenses[0].note,
    amount: expenses[0].amount,
    createdAt: expenses[0].createdAt
  })
})



test('should set new date on date change', () => {
  const now = moment()
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find("SingleDatePicker").prop('onDateChange')(now)
  expect(wrapper.state('createdAt')).toEqual(now)
})

test('should set focus on focus change', () => {
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find("SingleDatePicker").prop('onFocusChange')({focused:true})
  expect(wrapper.state('calendarFocused')).toBe(true)
})
