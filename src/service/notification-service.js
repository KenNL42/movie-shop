export const NOTIF_CART_CHANGED = 'notif_cart_changed';

let instance = null;
var observers = {}; // key: notifName, value: {observer: value, callbackFunc: value}

class NotificationService {
    constructor() {
        if(!instance){
            instance = this;
        }
        return instance;
    }

    // callback for every observer based on notification name
    postNotification = (notificationName, data) => {
        let obs = observers[notificationName];
        for(var x = 0; x < obs.length; x++) {
            var obj = obs[x];
            obj.callBack(data)
        }
    }

    removeObserver = (observer, notificationName) => {
        var obs = observers[notificationName];
        if (obs) {
            for (var x = 0; x < obs.length; x++) {
                if (observer === obs[x].observer) {
                    obs.splice(x,1)
                    observers[notificationName] = obs;
                    break;
                }
            }
        }
    }

    addObserver = (observerParam, notificationName, callBackParam) => {
        let obs = observers[notificationName];

        if(!obs) {
            observers[notificationName] = [];
        }

        let obj = {observer: observerParam, callBack: callBackParam};
        observers[notificationName].push(obj);
    }
}

export default NotificationService;