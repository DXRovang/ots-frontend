import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser.js'

const Logout = ({logout})=> {


  return(
    <form onSubmit={handleSubmit}>
      <input type="submit" value="logout"/>
    </form>
  )
}

export default connect(null, { logout })(Logout)
