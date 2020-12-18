import axios from "axios";

const instance = axios.create({
  baseURL: '',
  mode: 'cors',
  cache: 'no-cache',
headers: { 'Content-Type': 'application/json' , 'Access-Control-Allow-Origin': '*'}
});

const getUser = async ()=> {
  try {
    const user = await instance.get();
    return user.data;
  } catch (err) {
    console.error(err);
  }
};

const getCollection = async () => {
    try {
        const collection = await instance.get();
        return collection.data
    } catch (err) {
        console.log(err);
    }
}

export default {
    getUser,
    getCollection
}