import * as axios from 'axios';
import fakeAuth from 'fake-authentication';

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
      return axiosInstance(
         `users?_page=${currentPage}&_limit=${pageSize}`
      ).then(res => {
         return res.data;
      });
   },

   getProfile(userId) {
      return axiosInstance(`users/${userId}`).then(res => {
         return res.data;
      });
   },
   getUserPosts (userId) {
      return axiosInstance(`users/${userId}/posts`).then((res) => {
         return res.data
      })
   },
};

export const authApi = {
   signIn(email, password) {
      return fakeAuth
         .signIn(email, password)
         .then(resp => console.log('signIn', resp))
         .catch(err => console.log('signIn', err));
   },

   isAuthenticated() {
      return fakeAuth.isAuthenticated();

   },

   signOut(){
      return fakeAuth.signOut();
   }
}