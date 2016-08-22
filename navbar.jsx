import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

export default (props) => {
  const signedIn = props.auth && props.auth.uid

  return (
<div class="ui grid">
  <div class="four wide column">
    <div class="ui vertical fluid tabular menu">
      <a class="active item">
        Bio
      </a>
      <a class="item">
        Pics
      </a>
      <a class="item">
        Companies
      </a>
      <a class="item">
        Links
      </a>
    </div>
  </div>
  <div class="twelve wide stretched column">
    <div class="ui segment">
      This is an stretched grid column. This segment will always match the tab height
    </div>
  </div>
</div>
