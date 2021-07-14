import axios from "axios";

// const secret = "b4f880db5643d21a";
const API_KEY = "f588cb341c6f6148320caa8e9b68183f";
const baseURL = "https://api.flickr.com/services/rest/?method=";

export const getImages = (count,searchName) => {
  try {
    return axios.get(
      `${baseURL}flickr.photos.search&api_key=${API_KEY}&tags=${searchName}&per_page=12&page=${count}&format=json&nojsoncallback=1`
    );
  } catch (error) {
    console.log(error);
  }
};

export const addFavorites = (id) => {
  try {
    return axios.post(
      `${baseURL}flickr.favorites.add&api_key=${API_KEY}&photo_id=${id}&format=json&nojsoncallback=1`
    );
  } catch (error) {
    console.log(error);
  }
};

// https://api.flickr.com/services/rest/?method=flickr.favorites.getPublicList&api_key=f588cb341c6f6148320caa8e9b68183f&format=json&nojsoncallback=1