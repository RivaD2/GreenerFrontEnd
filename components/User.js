import React, { Component } from 'react';
import axios from 'axios';
import AxiosInstance from '../Axios';
import { render } from 'react-dom';

export default class Users extends Component {
  constructor(props) {
        super(props);
        this.state = { users: [] };
    }
  componentDidMount() {
    axios.get('/user/signup')
        .then(res => {
            this.setState({ user: res.data });
        })
        .catch(function (error) {
            console.log(error);
        })
        // These endpoints are not to be taken literally, they are placeholders
    axios.get('user/signin')
        .then(res => {
            this.setState({ user: res.data });
        })
        .catch(function (error) {
            console.log(error);
        })
  }
  render(){
      return(
          <>
          </>
      )
  }
}