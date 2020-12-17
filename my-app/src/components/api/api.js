import * as axios from 'axios';

// const baseUrl = 'https://jsonplaceholder.typicode.com/';

const axiosInstance = axios.create({
   baseURL: 'https://jsonplaceholder.typicode.com/'
});

export const userApi = {
   //users component
   getUsersList() {
      return axiosInstance(`users`).then(res => {
         return res.data;
      });
   },

   getUsersByPage(currentPage, pageSize) {
      return axiosInstance(`users?_page=${currentPage}&_limit=${pageSize}`).then(
         res => {
         return res.data;
         }
      );
   },

};
