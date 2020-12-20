import axios from "axios";
import base64 from 'base-64';

const instance = axios.create({
  baseURL: '',
  mode: 'cors',
  cache: 'no-cache',
  headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
});

export const getUserData = async (username) => {
  try {
    const user = await instance.get('http://localhost:3000/api/v1/user', {
      "name": username
    });
    return user.data;
  } catch (err) {
    console.error(err);
  }
};

export const signUserUp = async (userObj) => {
  try {
    const user = await instance.post('http://reactnative-server-2020.herokuapp.com/api/v1/user/signUp', {
      userObj,
    });
    return user.data;
  } catch (err) {
    console.error(err);
  }
};

export const signUserIn = async (userObj) => {
  try {
    const requestOptions = {
      mode: 'cors',
      method: 'post',
      headers: {
        'Authorization': `Basic ${userObj}`
      }
    }
    const server = 'https://reactnative-server-2020.herokuapp.com/api/v1/user/signIn'
    const response = await fetch(server, requestOptions)
    const json = await response.json()
    return json
  }
  catch (err) {
    console.error(err);
  }
};

export const getCollection = async () => {
  try {
    const collection = await instance.get();
    return collection.data
  } catch (err) {
    console.log(err);
  }
}

