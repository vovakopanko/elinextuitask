import axios from "axios";

// const secret = "b4f880db5643d21a";
const API_KEY = "f588cb341c6f6148320caa8e9b68183f";
const baseURL = "https://api.flickr.com/services/rest/?method=";

export type PhotosResponseData = {
  photos: PhotosData;
  stat?: string;
};

export type PhotosData = {
  page: number;
  pages: number;
  perpage?: number;
  photo: Array<Photo>;
  total: number;
};

export type Photo = {
  farm: number;
  id: string;
  isfamily?: number;
  isfriend?: number;
  ispublic?: number;
  owner?: string;
  secret?: string;
  server?: string;
  title: string;
};

export type PhotosResponse = {
  data: PhotosResponseData;
  status?: number;
};

export const getPhotosDataAsync = async (count: number, searchName: string) => {
  try {
    const response= await axios.get<PhotosResponseData>(
      `${baseURL}flickr.photos.search&api_key=${API_KEY}&tags=${searchName}&per_page=12&page=${count}&format=json&nojsoncallback=1`
    );

    return response.data.photos;
  } catch (error) {
    console.log(error);
  }
};
