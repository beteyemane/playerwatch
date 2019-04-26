import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import MoviesShow from './MoviesShow'

class Home extends React.Component{
  constructor() {
    super()
    this.state = {
      search: '',
      movies: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    e.preventDefault()
    this.setState({search: e.target.value})
    axios.get('https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup', {
      params: {
        term: e.target.value,
        country: 'uk'
      },
      headers: {
        'X-RapidAPI-Key': '18e69f1023mshc52a0e3532b65e9p1781e4jsn85d9e7bd722c',
        'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
      }
    })
      .then(res => {
        this.setState({movies: res.data.results})
      })
      .catch(err => console.log(err))
  }

  render(){
    return(
      <section>
        <h1>Playerwatch</h1>
        <input
          type="text"
          className="input"
          placeholder="Search..."
          value={this.state.search}
          onChange={this.handleChange}/>
        {this.state.movies.map(movie => <div key={movie.id}> <Link to={`/movies/${movie.name}`}> <h3>{movie.name}</h3> </Link>
        </div>)}
      </section>
    )
  }
}

export default Home
