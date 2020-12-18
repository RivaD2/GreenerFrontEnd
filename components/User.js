import React, { Component } from 'react';
import axios from 'axios';

export default class Users extends Component {
  constructor(props) {
        super(props);
        this.state = { users: [] };
    }
  componentDidMount() {
    axios.get('/user/signup')
        .then(res => {
            this.setState({ users: res.data });
        })
        .catch(function (error) {
            console.log(error);
        })
        // These endpoints are not to be taken literally, they are placeholders
    axios.get('user/collection')
        .then(res => {
            this.setState({ collection: res.data });
        })
        .catch(function (error) {
            console.log(error);
        })
  }
}