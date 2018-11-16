import React, {Component} from 'react';
import 'whatwg-fetch';


class ApiLib extends Component {
  register(props) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(props)
    };
    const link = "https://mercy.digital:8443/Mercy/createAccount";
    fetch(link, requestOptions)
    .then(response => response.json())
    .then(function(response) {
      return (response.ok ? response.result : response.reason)
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
    const link = "https://mercy.digital:8443/Mercy/"
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
    const link = "https://mercy.digital:8443/Mercy/"
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
    const link = "https://mercy.digital:8443/Mercy/"
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
    const link = "https://mercy.digital:8443/Mercy/getHistory"
    fetch(link, requestOptions)
    .then(response => response.json())
    .then(response => response.result)
    .then(function(result) {
      var i;
      var res = [];
      for (i=0; i < result.length; i++) {
        try {
          /* for tranfers */
          res.push({'description': result[i].description,
                    'memo': result[i].op[1].memo,
                    'amount': result[i].op[1].amount});
        } catch(e) {
          /* for other stuff */
          res.push({'description': result[i].description,
                    'memo': result[i].op[1].options.memo_key,
                    'amount': result[i].op[1].fee});
        }
      };
      return(res);
    })
  }

  setContent(props) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(props)
    };
    const link = "https://mercy.digital:8443/Mercy/"
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
    const link = "https://mercy.digital:8443/Mercy/"
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
    const link = "https://mercy.digital:8443/Mercy/"
    fetch(link, requestOptions)
    .then(response => response.json())
    .then(function(response) {
      return (response.ok ? response.type : response.reason)
    })
  }

  render() {}
}
