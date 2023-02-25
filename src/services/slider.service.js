import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL_KEY
console.log(API_URL);

export const getsliderslist = async () => {

  const response = await axios.get(`${API_URL}/products`);
  console.log("api response", response);
  return response;
}




