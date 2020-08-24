import React from 'react'
import {connect} from 'react-redux'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'
import numeral from 'numeral'


export const ExpenseSummary = ({count, formatedTotal}) => (
  <div>
    <h1>Viewing {count} {count === 1 ? 'expense':'expenses' } totalling {formatedTotal}</h1>
  </div>
)

const mapStateToProps = (state) => {
  const filteredExpenses  = selectExpenses(state.expenses, state.filters)
  const rawTotal = selectExpensesTotal(filteredExpenses)
  return {
    count: filteredExpenses.length,
    formatedTotal: numeral(rawTotal /  100).format('$0,0.00')
  }
}

export default connect(mapStateToProps)(ExpenseSummary);
