import 'whatwg-fetch';

class HttpService {
    getMovieLists = () => {
        var promise = new Promise((resolve, reject) => {
            fetch('https://movie-shop-webapp-api.herokuapp.com/movie')
            // fetch('http://localhost:3000/movie')
            .then(response => {
                resolve(response.json());
            })
        })
        return promise;
    }
};

export default HttpService;