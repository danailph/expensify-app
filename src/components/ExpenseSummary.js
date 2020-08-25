import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'
import numeral from 'numeral'


export const ExpenseSummary = ({count, formatedTotal}) => (
  <div className="page-header">
    <div className="content-container">
      <h1 className="page-header__title">Viewing <span>{count}</span> {count === 1 ? 'expense':'expenses' } totalling <span>{formatedTotal}</span></h1>
      <div className="page-header__actions">
        <Link className="button" to="/create">Add Expense</Link>
      </div>
    </div>
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
