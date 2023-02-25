import axios from 'axios'

const API_URL = "http://localhost:3002"

export const getsliderslist = async () => {

  const response = await axios.get(`${API_URL}/products`);
  console.log("api response", response);
  return response;
}




