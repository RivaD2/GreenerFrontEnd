import React, { Component } from 'react';
import axios from 'axios';

export default class Users extends Component {
  constructor(props) {
        super(props);
        this.state = { users: [] };
    }
  componentDidMount() {
        axios.get('')
            .then(res => {
                this.setState({ users: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}