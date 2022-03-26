import axios from 'axios';
import store from '../store';
const http = axios.create({
  baseURL: 'http://localhost:8080',
});

http.interceptors.request.use(
  function (config) {
    store.dispatch('vuex_SET_httpPending', true);
    return config;
  },
  function (error) {
    console.log('An error in http request');
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  function (response) {
    store.dispatch('vuex_SET_httpPending', false);
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const getCoverList = async () => {
  try {
    const result = await http.get('/covers/list');
    return {
      success: true,
      data: result.data,
    };
  } catch (error) {
    return { success: false, error };
  }
};

export const getCoverListItems = async (coverId) => {
  try {
    const result = await http.get(`/post/list/${coverId}`);
    return { success: true, data: result.data };
  } catch (error) {
    return { success: false, error };
  }
};

export const addCoverList = async (data) => {
  try {
    const result = await http.post('/covers', data);
    return {
      success: true,
      data: result.data,
    };
  } catch (error) {
    return { success: false, error };
  }
};

export const addNewPost = async (data) => {
  try {
    const result = await http.post('/post', data);
    return {
      success: true,
      data: result.data,
    };
  } catch (error) {
    return { success: false, error };
  }
};

export const fetchPost = async (postId) => {
  try {
    const result = await http.get(`/post/${postId}`);
    return {
      success: true,
      data: result.data,
    };
  } catch (error) {
    return { success: false, error };
  }
};
