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
        <p>Check where a tv show or movie is available to watch</p>
        <input
          type="text"
          className="input"
          placeholder="Search..."
          value={this.state.search}
          onChange={this.handleChange}/>
        {this.state.movies.map(movie =>
          <div className="search-movies" key={movie.id}>
            <Link to={`/movies/${movie.name}`}>
              <p>{movie.name}</p>
            </Link>
          </div>)}
      </section>
    )
  }
}

export default Home
