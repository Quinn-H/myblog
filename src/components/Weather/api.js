import axios from 'axios'

export function getLocation () {
  return axios.get('http://ip-api.com/json')
}
export function getWeather (location) {
  let units = '&units=metric'
  let appid = '&APPID=5492d1e790780d7cea76a2f393fea2e8'
  return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + location + units + appid)
}
