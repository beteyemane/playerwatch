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
        term: `${this.props.match.params.id}`,
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
    if (!this.state.movies[0]) return null
    console.log(this.state.movies[0])
    const { name, picture, locations } = this.state.movies[0]
    return(
      <div>
        <h1>{name}</h1>
        <img src={picture} alt={name} height="300px"/>
        {locations.map(location =>
          <div key={location.id}>
            <a href={location.url}>
              <p>{location.display_name}</p><
            /a>
          </div>)}
      </div>
    )
  }

}

export default MoviesShow
