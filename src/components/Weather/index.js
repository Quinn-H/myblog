import React, { Component } from 'react'
import { getLocation, getWeather } from './api'

export default class Weather extends Component {
  constructor (props) {
    super(props)
    this.state = {
      format: 'C',
      location: '',
      weather: '',
      temp: 0
    }
  }

  componentDidMount () {
    let _this = this
    getLocation()
    .then(function (result) {
      let loc = result.data.city + ', ' + result.data.countryCode
      getWeather(loc)
        .then(function (result) {
          _this.setState({
            location: loc,
            weather: result.data.weather[0],
            temp: result.data.main.temp
          })
        })
    }).catch(
      _this.setState({
        location: 'Cannot get location.',
        temp: null
      })
    )
  }

  render () {
    let hr = (new Date).getHours()
    let tod = (hr >= 17) ? 'night' : 'day'
    return (
      <div className='container'>
        <h1>Local Weather</h1>
        <div className='location'>
          <h2>{this.state.location}</h2>
          <p>{this.state.weather.main}</p>
          <i className={'wi wi-owm-' + tod + '-' + this.state.weather.id}></i>
          {this.state.temp &&
            <p>{this.state.temp} &#176;{this.state.format}</p>
          }
          {this.state.temp}
        </div>
      </div>
    )
  }
}
