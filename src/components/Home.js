import React from 'react'
import axios from 'axios'

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
    console.log('HANDLE CHANGE FUNC')

    //search is empty
    axios.get('https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup', {
      params: {
        term: e.target.value,
        country: 'uk'
      },
      headers: {
        'X-RapidAPI-Key': `${process.env.UTELLY_KEY}`,
        'X-RapidAPI-Host': `${process.env.UTELLY_HOST}`
      }
    })
      .then(res => {
        this.setState({movies: res.data.results})
      })
      .catch(err => console.log(err))
  }


  render(){
    console.log('movies', this.state.movies)
    console.log('search', this.state.search)
    return(
      <section>
        <h1>Playerwatch</h1>
        <input
          type="text"
          className="input"
          placeholder="Search..."
          value={this.state.search}
          onChange={this.handleChange}/>
        {this.state.movies.map(movie => <div key={movie.id}> <h3>{movie.name}</h3> </div>)}
      </section>
    )
  }
}

export default Home
