import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import './App.css'

import Form from './components/Form'
import Title from './components/Title'
import Weather from './components/Weather'

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
  state = {
    temperature: null,
    city: null,
    country: null,
    humidity: null,
    description: null,
    minTemp: null,
    maxTemp: null,
    error: null
  }

  getWeather = async event => {
    event.preventDefault()

    // console.log(event.target.elements)

    const { city, country } = event.target.elements
    let data = null

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value},${country.value}&appid=${API_KEY}&units=metric`

    if (city.value || country.value) {
      // console.log (city.value);
      const api_call = await fetch(url);
      data = await api_call.json();
    }

    if ( data !== null ) {

      if (data.cod == '200') {
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.sys.humidity,
          description: data.weather[0].description,
          minTemp: data.main.temp_min,
          maxTemp: data.main.temp_max,
          error: ''
        })
      } else {
        this.setState({
          temperature: null,
          city: null,
          country: null,
          humidity: null,
          description: null,
          minTemp: null,
          maxTemp: null,
          error: data.message
        })
      }

    } else {
      this.setState({
        temperature: null,
        city: null,
        country: null,
        humidity: null,
        description: null,
        minTemp: null,
        maxTemp: null,
        error: 'Please fill in form fields'
      })
    }

  }

  render() {
    return (
      <div className='wrapper'>
        <div className='main'>
          <Grid container spacing={0}>
            <Grid item xs={12} md={6}>
              <Title />
            </Grid>
            <Grid item xs={12} md={6}>
              <Form getWeather={this.getWeather} />
              <Weather
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                minTemp={this.state.minTemp}
                maxTemp={this.state.maxTemp}
              />
              <p>{this.state.error}</p>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default App