import React from 'react'
import { Link } from 'react-router'
import Nav from '../containers/NavContainer'

export default React.createClass({
  render () {
    return (
      <div id="root-div">
        <p>app.jsx</p>
        {this.props.children}
      </div>
    )
   }
 })
