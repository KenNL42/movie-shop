import React, { Component } from 'react'
import './cart.css'
import MovieCondensed from '../movie-condensed/movie-condensed'
import NotificationService, {NOTIF_CART_CHANGED} from '../service/notification-service';

let ns = new NotificationService();

class Cart extends Component{
    constructor(props) {
        super(props);
        this.state = {cart:[]};
        this.createCart = this.createCart.bind(this);
        this.inCartChanged = this.inCartChanged.bind(this);
    }
    
    componentDidMount() {
        ns.addObserver(this, NOTIF_CART_CHANGED, this.inCartChanged);
    }
    
    componentWillUnmount() {
        ns.removeObserver(this, NOTIF_CART_CHANGED);
    }
    
    createCart = () => {
        const list = this.state.cart.map((movie) => 
            <MovieCondensed movie={movie} key={movie._id} />
        );
        return (list);
    }

    inCartChanged(newCart){
        this.setState({cart:newCart});
    }

    render() {
        return (
            <div className="card cart">
                <div className="card-block">
                    <h4 className="card-title">Cart</h4>
                    <ul className="list-group">
                        {this.createCart()}
                    </ul>
                </div>
            </div>
        )
    }
    
}

export default Cart;