import React from 'react'
import axios from 'axios'

class MoviesShow extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      movies: []
    }
  }

  componentDidMount(){
    axios.get('https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup', {
      params: {
        term: '',
        country: 'uk'
      },
      headers: {
        'X-RapidAPI-Key': '18e69f1023mshc52a0e3532b65e9p1781e4jsn85d9e7bd722c',
        'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
      }
    })
      .then(res => {
        this.setState({movies: res.data})
      })
      .catch(err => console.log(err))
  }

  render(){
    return(
      <section>
        <h1>Movies Show!</h1>
      </section>
    )
  }

}

export default MoviesShow
