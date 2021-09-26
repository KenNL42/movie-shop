import './App.css';
import { Component } from 'react';
import { render } from '@testing-library/react';
import Movie from './movie/movie'
import Cart from './cart/cart'
import HttpService from './service/http-service'

const http = new HttpService();

class App extends Component{
  constructor(props) {
    super(props);

    this.state = {movies:[]};
    this.loadData = this.loadData.bind(this);
    this.movieList = this.movieList.bind(this);
    this.loadData();
  }

  loadData = () => {
    var self = this;
    http.getMovieLists().then(data => {
      self.setState({movies:data})
    }, err => {
      console.log('cannot retrieve movie list and set state');
    });
  }

  movieList = () => {
    const list = this.state.movies.map((movie) => 
      <div className='col-sm-4' key={movie._id}>
        <Movie movie={movie}/>
      </div>
    );
    return list;
  }
  
  render() {
    return (
      <div className="App">
        <div className="header">
          Welcome to Movie Store
        </div>
        <div className="container-fluid App-main">
          <div className="row">
            <div className="col-sm-8">
              <div className="row">
                {this.movieList()}
              </div>
            </div>
            <div className='col-sm-4'>
              <Cart />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;