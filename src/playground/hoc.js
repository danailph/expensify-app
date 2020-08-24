import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>Some text: {props.info}</p>
  </div>
)

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is privat info. Please don't share</p>}
      <WrappedComponent {...props}/>
    </div>
  )
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ?
         <WrappedComponent {...props}/> :
         <p>This is privat info. Please log in first</p>
      }

    </div>
  )
}


const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)


ReactDOM.render(<AuthInfo isAuthenticated={false} info='Some other text' />, document.getElementById('app'))
