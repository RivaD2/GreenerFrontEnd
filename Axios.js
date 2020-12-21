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
    console.log("Making server request to " + server + " with body:", requestOptions)
    const response = await fetch(server, requestOptions)
    const json = await response.json()
    console.log("User logged in via login:", json)
    return json
  }
  catch (err) {
    console.error(err);
  }
};

export const signInOauthUser = async (accessToken) => {
  try {
    const requestOptions = {
      mode: 'cors',
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: accessToken
      })
    }
    const server = 'https://reactnative-server-2020.herokuapp.com/api/v1/user/authenticate';
    const response = await fetch(server, requestOptions);
    const json = await response.json();
    return json;
  }
  catch (err) {
    console.error(err);
  }
};
export const updateUser = async (userId,userObj) => {
  try {
    const requestOptions = {
      mode: 'cors',
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userObj)
    }
    const server = `https://reactnative-server-2020.herokuapp.com/api/v1/user/${userId}`;
    console.log("Making server request to " + server, requestOptions)
    const response = await fetch(server, requestOptions);
    console.log("Response: ", response)
    const json = await response.json();
    console.log("JSON:", json);
    return json;
  }
  catch (err) {
    console.log("ERROR!")
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

