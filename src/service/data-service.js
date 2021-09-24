import NotificationService, {NOTIF_CART_CHANGED} from "./notification-service";

let ns = new NotificationService();

let instance = null;
var cart = [];

class DataService {
    constructor() {
        if(!instance){
            instance = this;
        }
        return instance;
    }

    itemInCart = item => {
        for(var x = 0; x < cart.length; x++){
            if(cart[x]._id === item._id){
                return true;
            }
        }
        return false;
    }

    addItemToCart = item => {
        cart.push(item);
        ns.postNotification(NOTIF_CART_CHANGED, cart);
        console.log(cart);
    }

    removeItemFromCart = item => {
        for (var x = 0; x < cart.length; x++){
            if(cart[x]._id === item._id){
                cart.splice(x, 1);
                ns.postNotification(NOTIF_CART_CHANGED, cart);
                break;
            }
        }
    }   
}

export default DataService;