import React from 'react'
import { shallow } from 'enzyme'
import {ExpenseSummary} from '../../components/ExpenseSummary'


test('should render ExpenseSummary correctly with one expense',() => {
  const wrapper = shallow(<ExpenseSummary count={1} formatedTotal={1000}/>)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseSummary correctly with multiple expenses',() => {
  const wrapper = shallow(<ExpenseSummary count={3} formatedTotal={3000}/>)
  expect(wrapper).toMatchSnapshot()
})
