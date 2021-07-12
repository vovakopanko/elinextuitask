import axios from "axios";

// const secret = "b4f880db5643d21a";
const API_KEY = "f588cb341c6f6148320caa8e9b68183f";
const baseURL = "https://api.flickr.com/services/";

export const getImages = (count,searchName) => {
  try {
    return axios.get(
      `${baseURL}rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${searchName}&per_page=9&page=${count}&format=json&nojsoncallback=1`
    );
  } catch (error) {
    console.log(error);
  }
};
