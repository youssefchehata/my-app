import React from 'react';
import axios from 'axios';



import { StatusCodes } from 'http-status-codes';




let Api = () => {
  const api = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com`,
  });



  api.interceptors.response.use(
    (response) => {
      // console.log("Response Interceptor", response);
      return response;
    },
    (error) => {
      console.log('Error Interceptor');
      const { status } = error.response;
      if (status === StatusCodes.INTERNAL_SERVER_ERROR) {
   alert("Erreur est survenu")
      }

      return Promise.reject(error);
    }
  );

  return api;
};


export default Api();
