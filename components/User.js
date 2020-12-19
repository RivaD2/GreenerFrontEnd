import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Users(props){
    const [users, setUsers] = useState([]);
    const [collection, setCollection] = useState([]);


    useEffect(() => {
        axios.get('/user/signup')
        .then(res => {
            setUsers([...users, res.data]);
        })
        .catch(function (error) {
            console.log(error);
        })
        // These endpoints are not to be taken literally, they are placeholders
    axios.get('user/collection')
        .then(res => {
            setCollection(res.data);
        })
        .catch(function (error) {
            console.log(error);
        })
    },[]);
}