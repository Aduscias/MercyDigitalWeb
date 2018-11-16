import React, {Component} from 'react';
import 'whatwg-fetch';


class ApiLib extends Component {
  register(props) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(props)
    };
    const link = "mercy.digital:7080/Mercy/createAccount";
    fetch(link, requestOptions)
    .then(response => response.json())
    .then(function(response) {
      return (response.ok ? response.data : response.reason)
    })
  }

  authorize(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
          password: password
        })
    };
    const link = "mercy.digital:7080/Mercy/"
    fetch(link, requestOptions)
    .then(response => response.json())
    .then(function(response) {
      return (response.ok ? response.type : response.reason)
    })
  }

  getOrgs(props) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(props)
    };
    const link = "mercy.digital:7080/Mercy/"
    fetch(link, requestOptions)
    .then(response => response.json())
    .then(function(response) {
      return (response.ok ? response.type : response.reason)
    })
  }

  transfer(props) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(props)
    };
    const link = "mercy.digital:7080/Mercy/"
    fetch(link, requestOptions)
    .then(response => response.json())
    .then(function(response) {
      return (response.ok ? response.data : response.reason)
    })
  }

  getHistory(props) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(props)
    };
    const link = "mercy.digital:7080/Mercy/getHistory"
    fetch(link, requestOptions)
    .then(response => response.json())
    .then(function(response) {
      return (response.ok ? response.data : response.reason)
    })
  }

  setContent(props) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(props)
    };
    const link = "mercy.digital:7080/Mercy/"
    fetch(link, requestOptions)
    .then(response => response.json())
    .then(function(response) {
      return (response.ok ? response.type : response.reason)
    })
  }

  getBalance(props) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(props)
    };
    const link = "mercy.digital:7080/Mercy/"
    fetch(link, requestOptions)
    .then(response => response.json())
    .then(function(response) {
      return (response.ok ? response.type : response.reason)
    })
  }

  getContent(props) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(props)
    };
    const link = "mercy.digital:7080/Mercy/"
    fetch(link, requestOptions)
    .then(response => response.json())
    .then(function(response) {
      return (response.ok ? response.type : response.reason)
    })
  }

  render() {}
}
