import axios from "axios";

const instance = axios.create({
  baseURL: '',
  mode: 'cors',
  cache: 'no-cache',
  headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}
});

export const getUserData = async username => {
  try {
    const requestOptions = {
      body: JSON.stringify({"name": username}),
      mode: 'cors',
      method: 'post',
      headers: {
        'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'
      }
    }
    const server = "https://reactnative-server-2020.herokuapp.com/api/v1/user/stuff/all";
    const user = await fetch(server, requestOptions);
    let json = await user.json();
    return json;
  } catch (err) {
    console.error(err);
  }
};

export const getPlant = async () => {
  try {
    const plant = await axios.get('http://reactnative-server-2020.herokuapp.com/api/v1/plants')
    return await plant.data;
  } catch (err) {
    console.error(err);
  }
};

export const getUserPlants = async userId => {
  try {
    const plant = await axios.get(`http://reactnative-server-2020.herokuapp.com/api/v1/user-plants/${userId}/all`)
    return await plant.data;
  } catch (err) {
    console.error(err);
  }
};

export const getUserTerrariums = async userId => {
  try {
    const plant = await axios.get(`http://reactnative-server-2020.herokuapp.com/api/v1/user-terrariums/${userId}/all`)
    return await plant.data;
  } catch (err) {
    console.error(err);
  }
};

export const addPlantToUser = async (user, plant) => {
  try {
    const requestOptions = {
      body: JSON.stringify({"userID": user, "plantID": plant}),
      mode: 'cors',
      method: 'post',
      headers: {
        'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'
      }
    }
    const server = 'http://reactnative-server-2020.herokuapp.com/api/v1/user-plants';
    const userPlant = await fetch(server, requestOptions);
    let json = await userPlant.json();
    return json;
  } catch (err) {
    console.error(err);
  }
};

export const getTerrarium = async () => {
  try {
    const terrarium = await axios.get('http://reactnative-server-2020.herokuapp.com/api/v1/terrariums')
    return await terrarium.data;
  } catch (err) {
    console.error(err);
  }
};

export const addTerrariumToUser = async (user, terrarium) => {
  try {
    const requestOptions = {
      body: JSON.stringify({"userID": user, "terraID": terrarium}),
      mode: 'cors',
      method: 'post',
      headers: {
        'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'
      }
    }
    const server = 'http://reactnative-server-2020.herokuapp.com/api/v1/user-terrariums';
    const userPlant = await fetch(server, requestOptions);
    let json = await userPlant.json();
    return json;
  } catch (err) {
    console.error(err);
  }
};

export const signUserUp = async userObj => {
  try {
    let user = await fetch('https://reactnative-server-2020.herokuapp.com/api/v1/user/signUp', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObj),
      
    })
    return await user.json();
  } catch (err) {
    console.error(err);
  }
};

export const signUserIn = async userObj => {
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

export const signInOauthUser = async accessToken => {
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

export const updateUserDB = async (userId,userObj) => {
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
    const response = await fetch(server, requestOptions);
    const json = await response.json();
    return json;
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

