import React, { Component } from 'react';
import CardList from './components/CardList/CardList';
import { robots } from './robots'
import SearchInput from './components/SearchInput/SearchInput';
import './App.css'


class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://jsonplaceholder.typicode.com/users"; // site that doesn’t send Access-Control-*
    fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
      .then(response => response.json())
      .then(users => { this.setState({ robots: users }) })
      .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
  }


  //Фильтруем роботов по имени
  onSearchPage = (event) => {
    this.setState({ searchfield: event.target.value })
  }


  render() {
    const { robots, searchfield } = this.state;
    //Фильтруем роботов по имени
    const inputField = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return (!robots.length) ? <h1>loading</h1> 
    : (
        <div>
          <h1>Robo Friends</h1>
          <div>
            <SearchInput searchChange={this.onSearchPage} />
          </div>
          <div>
            <CardList robots={inputField} />
          </div>
        </div>
      );
    }
  }


export default App;
