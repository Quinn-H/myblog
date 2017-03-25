import React, { Component } from 'react'
import Page from '../Page'
// import { Link } from 'react-router'
// import { GitHubBtn, PortfolioItem } from '../../components'
//
// import styles from './index.css'

// import goflat from '../../../content/portfolio/goflat.png'

export default class Portfolio extends Component {
  render () {
    let props = this.props
    return (
      <Page {...props}>
        <h1>testing</h1>
      </Page>
  )
  }
}
