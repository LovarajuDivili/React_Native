import axios from "axios";

export interface AxiosRequest {
  url : string;
  method : string;
  body? : {};
  headers? : {}
}

export const BASE_URL = "https://localhost/7000"



const request = async (request : AxiosRequest) => {
  const response = await axios ({
    method : request.method,
    url : request.url,
    data : request.body || {},
    headers : request.headers
  });
  return response?.data;
}



export default request;