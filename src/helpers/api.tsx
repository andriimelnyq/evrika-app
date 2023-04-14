import axios from 'axios';

const BASE_URL = 'https://evrika-rpkv.onrender.com/api/';

export const getCourses = () => axios.get(`${BASE_URL}catalog/courses/`)
  .then(response => response.data.results);

export const getCourseDetails = (id: string) => axios.get(`${BASE_URL}catalog/courses/${id}/`)
  .then(response => response.data);

export const getCoursesBySchool = (isSchool: string) => axios.get(`${BASE_URL}catalog/courses/?school_subject=${isSchool}`)
  .then(response => response.data.results);

export const postLogin = (email: string, password: string) => axios.post(`${BASE_URL}user/token/`, {
  email,
  password,
});

export const postRegister = (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
) => axios.post(`${BASE_URL}user/register/`, {
  first_name: firstName,
  last_name: lastName,
  email,
  password,
});

export const postRefreshToken = async (refresh: string) => (
  fetch(`${BASE_URL}user/token/refresh/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      refresh,
    }),
  }).then(res => res.json())
);
