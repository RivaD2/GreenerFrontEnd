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
    const user = await instance.get('https://reactnative-server-2020.herokuapp.com/api/v1/user', {
      "name": username
    });
    return user.data;
  } catch (err) {
    console.error(err);
  }
};

export const getPlant = async () => {
  try {
    const user = await instance.get('https://reactnative-server-2020.herokuapp.com/api/v1/plants');
    return await user.json();
  } catch (err) {
    console.error(err);
  }
};

export const getTerrarium = async () => {
  try {
    const user = await instance.get('https://reactnative-server-2020.herokuapp.com/api/v1/terrariums');
    return await user.json();

  } catch (err) {
    console.error(err);
  }
};

export const setDefaultUserData = async (userId) => {
  try {
    const terrarium = await getTerrarium();
    const plant = await getPlant();
    const userPlant = await instance.post('https://reactnative-server-2020.herokuapp.com/api/v1/user-plants', {
      userID: userId,
      plantID: plant._id
    });
    const userTerrarium = await instance.post('https://reactnative-server-2020.herokuapp.com/api/v1/user-terrariums', {
      userID: userId,
      terrariumID: terrarium._id
    });
    return { plant: await userPlant.json(), terrarium: await userTerrarium.json() };

  } catch (err) {
    console.error(err);
  }
};

// export const signUserUp = async (userObj) => {
//   try {
//     const user = await instance.post('https://reactnative-server-2020.herokuapp.com/api/v1/user/signUp', {
//       userObj,
//     });
//     return user.data;
//   } catch (err) {
//     console.error(err);
//   }
// };

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
export const signUserUp = async (userObj) => {
  let userRequest = await fetch('https://reactnative-server-2020.herokuapp.com/api/v1/user/signUp', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({

      name: userObj.name,
      password: userObj.password,
      role: "user",
      currency: 0

    }),

  });
  let addedUser = await userRequest.json();
  return addedUser.results;

}
export const getCollection = async () => {
  try {
    const collection = await instance.get();
    return collection.data
  } catch (err) {
    console.log(err);
  }
}

