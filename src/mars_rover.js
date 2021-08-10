export default class MarsRover {  
  static getRoverPic() {
    return fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1&api_key=${process.env.API_KEY`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      })
  }
}