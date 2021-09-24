import React, { Component } from 'react'
import './movie-condensed.css'
import DataService from '../service/data-service';

let ds = new DataService();

class MovieCondensed extends Component {
    constructor(props) {
        super(props);

        this.removeMovie = this.removeMovie.bind(this);
    }

    removeMovie = () => {
        ds.removeItemFromCart(this.props.movie);
    }

    render() {
        return (
            <li className="list-group-item d-flex pc-condensed">
                <button className="btn btn-outline-danger" onClick={() => this.removeMovie()}>X</button>
                <p>{this.props.movie.Title} | $10.00</p>
            </li>
        );
    }
    
}

export default MovieCondensed;