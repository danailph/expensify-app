import React from 'react'
import {Link} from 'react-router-dom'

 const ExpenseListItem = ({dispatch, id, description, amount, createdAt}, props) => {
   return (
  <div>
    <Link to={`/edit/${id}`}>{description}</Link>
    <p> {amount} - {createdAt}</p>
  </div>
)}



export default ExpenseListItem
