import React from 'react'
import axios from 'axios'

class Home extends React.Component{
  constructor() {
    super()
    this.state = {
      movies: []
    }
  }

  componentDidMount(){
    axios.get('https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup', {
      params: {
        term: 'legallyblonde',
        country: 'uk'
      },
      headers: {
        'X-RapidAPI-Host': `${process.env.UTELLY_HOST}`,
        'X-RapidAPI-Key': `${process.env.UTELLY_KEY}`
      }
    })
      .then(res => {
        this.setState({movies: res.data})
      })
  }

  render(){
    console.log(this.state.movies)
    return(
      <h1>Playerwatch</h1>
    )
  }
}

export default Home
