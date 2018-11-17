import React, {Component} from 'react';
import 'whatwg-fetch';
import MainPage from "./MainPage";
const crypto = require('crypto');



function genRandomString(length){
  return crypto.randomBytes(Math.ceil(length/2))
          .toString('hex') /** convert to hexadecimal format */
          .slice(0,length);   /** return required number of characters */
};

/**
* hash password with sha512.
* @function
* @param {string} password - List of required fields.
* @param {string} salt - Data to be validated.
*/
function sha512(password, salt){
    var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
    hash.update(password);
    var value = hash.digest('hex');
    return {
        salt: salt,
        passwordHash: value
    };
};

function saltHashPassword(userpassword) {
    var salt = genRandomString(16); /** Gives us salt of length 16 */
    var passwordData = sha512(userpassword, salt);
    return(passwordData.passwordHash);

};

export default class ApiLib {
  static createAccountDonor(type, account_name, password, first_name, last_name,
    birth_date, region, job) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            type: type,
            account_name: account_name,
            password: saltHashPassword(password),
            first_name: first_name,
            last_name: last_name,
            birth_date: birth_date,
            region: region,
            job: job})
    };
    const link = "https://mercy.digital:8443/Mercy/createAccount";
    return fetch(link, requestOptions)
    .then(response => response.json())
    .then(function(response) {
      return (response.ok ? response.result : response.reason)
    })
  }

  static createAccountOrganisation(type, account_name, password, organization_name,
  registration_date, legal_address, ogrn, inn, founders) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: type,
          account_name: account_name,
          password: saltHashPassword(password),
          organization_name: organization_name,
          registration_date: registration_date,
          legal_address: legal_address,
          ogrn: ogrn,
          inn: inn,
          founders: founders
        })
    };
    const link = "https://mercy.digital:8443/Mercy/createAccount";
    return fetch(link, requestOptions)
    .then(response => response.json())
    .then(function(response) {
      return (response.ok ? response.result : response.reason)
    })
  }

  static authorize(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          account_name: username,
          password: saltHashPassword(password)
        })
    };
    var res = {};
    const link = "https://mercy.digital:8443/Mercy/Auth";
    return fetch(link, requestOptions)
    .then(response => response.json())
    .then(function(result) {
      // console.log(result);
      // console.log(result.success ? {account_name: result.account_name,
      //     type: result.type} : null)
      return(result.success == 'true' ? {account_name: result.account_name,
          type: result.type} : null);
    });
  }


  static transfer(sender, receiver, amount, currency, payload) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sender: sender,
          receiver: receiver,
          amount: amount,
          currency: currency,
          payload: payload
        })
    };
    const link = "https://mercy.digital:8443/Mercy/Transfer"
    return fetch(link, requestOptions)
    .then(response => response.json())
    .then(function(response) {
      return (response.ok ? response.result : response.reason)
    })
  }

  static getHistory(props) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(props)
    };
    const link = "https://mercy.digital:8443/Mercy/getHistory"
    return fetch(link, requestOptions)
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

  static getBalance(accountName) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({accountName: accountName})
    };
    const link = "https://mercy.digital:8443/Mercy/getBalance"
    return fetch(link, requestOptions)
    .then(response => response.json())
    .then(function(response) {
      return (response.ok ? response.type : response.reason)
    })
  }

  static getInfo(name, type) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
              name: name,
              type: type})
    };
    const link = "https://mercy.digital:8443/Mercy/getInfo"
    return fetch(link, requestOptions)
    .then(response => response.json())
    .then(function(response) {
      return (response.ok ? response.type : response.reason)
    })
  }

  static getOrgList() {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: {}
    };
    const link = "https://mercy.digital:8443/Mercy/getOrgList";
    return fetch(link, requestOptions)
    .then(response => response.json())
    .then(function(response) {
      console.log(response)
    })
  }

}
