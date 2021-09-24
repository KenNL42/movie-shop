import React, {Component} from 'react';
import './movie.css';
import DataService from '../service/data-service';
import NotificationService, {NOTIF_CART_CHANGED} from '../service/notification-service';

let ns = new NotificationService();
let ds = new DataService();

class Movie extends Component {
    constructor(props) {
        super(props);

        this.state = {inCart: ds.itemInCart()}
        this.onButtonClick = this.onButtonClick.bind(this);
        this.inCartChanged = this.inCartChanged.bind(this);
    }

    componentDidMount() {
        ns.addObserver(this, NOTIF_CART_CHANGED, this.inCartChanged);
    }

    componentWillUnmount() {
        ns.removeObserver(this, NOTIF_CART_CHANGED);
    }

    inCartChanged(newCart){
        this.setState({inCart: ds.itemInCart(this.props.movie)});
    }

    onButtonClick = () => {
        if (this.state.inCart) {
            ds.removeItemFromCart(this.props.movie);
        }
        else {
            ds.addItemToCart(this.props.movie);
        }
    }
    
    render() {
        var btnClass;
        if (this.state.inCart) {
            btnClass = "btn btn-danger";
        }
        else {
            btnClass = "btn btn-primary";
        }
        return (
            <div className='card movie'>
                <img className='card-img-top' src={this.props.movie.Poster} alt='movie'></img>
                <div className='card-body'>
                    <h4 className="card-title">{this.props.movie.Title}</h4>

                    <p className="card-text"><b>Director : </b>{this.props.movie.Director}</p>
                    <p className="card-text"><b>Plot : </b>{this.props.movie.Plot}</p>
                    <p className="card-text"><b>Genre : </b>{this.props.movie.Genre}</p>
                    <p className="card-text"><b>Released Date : </b>{this.props.movie.Released}</p>

                    <p className="card-text"><b>Price: </b>$10.00</p>
                    <button onClick={() => this.onButtonClick()} className={btnClass}>
                        {this.state.inCart ? "Remove from Cart" : "Add to Cart"}
                    </button>
                </div>
            </div>
        );
    }
}

export default Movie;