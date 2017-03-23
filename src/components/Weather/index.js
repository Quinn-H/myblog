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
        location: '☀️  ☔️',
        temp: null
      })
    )
  }

  render () {
    let icons = `http://openweathermap.org/img/w/${this.state.weather.icon}.png`
    return (
      <div>
        <h1>Weather</h1>
        <div>
          <h2>{this.state.location}</h2>
          <p>{this.state.weather.main}</p>
          <img src={icons} />
          {this.state.temp &&
            <h3>{this.state.temp} &#176;{this.state.format}</h3>
          }
        </div>
      </div>
    )
  }
}
