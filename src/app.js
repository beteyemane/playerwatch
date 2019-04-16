import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import './style.scss'

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      movies: []
    }
  }

  componentDidMount(){
    axios.get('https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup', {
      params: {
        term: '',
        country: ''
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

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
