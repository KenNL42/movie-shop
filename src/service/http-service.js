import 'whatwg-fetch';

class HttpService {
    getMovieLists = () => {
        var promise = new Promise((resolve, reject) => {  
            // fetch('http://localhost:3000/movie')
            fetch('https://movie-shop-webapp-api.herokuapp.com/movie')
            .then(response => {
                resolve(response.json());
            })
        })
        return promise;
    }
};


export default HttpService;
