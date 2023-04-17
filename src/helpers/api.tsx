import axios from 'axios';

const BASE_URL = 'https://evrika-rpkv.onrender.com/api/';

export const getCourses = async () => {
  const response = await axios.get(`${BASE_URL}catalog/courses/`);
  let result = [...response.data.results];

  if (response.data.count <= 10) {
    return result;
  }

  const getNext = async (url: string) => {
    const res = await axios.get(url);

    result = [...result, ...res.data.results];
    if (res.data.next !== null) {
      await getNext(res.data.next);
    }
  };

  await getNext(response.data.next);

  return result;
};

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

export const postRefreshToken = (refresh: string) => (
  axios.post(`${BASE_URL}user/token/refresh/`, { refresh }).then(res => res.data)
);

export const postOrder = (data: number[], token: string) => (
  axios.post(`${BASE_URL}catalog/orders/`, { courses: data }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => res.data)
);
