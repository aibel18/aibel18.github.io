/** Client Rest SIE **/
export default function (URL, myapp) {
  this.URL = URL;
  var app = myapp;
  let reqHeader = new Headers();
  reqHeader.append('Content-Type', 'application/json');

  this.get = function (c, o, data, metaData) {

    if (this.verifyBlock(c, o))
      return Promise.reject();

    let objData = this.request(c, o, data, metaData);

    let objRequest = {
      method: 'GET',
      headers: reqHeader
    };

    let myPromise = new Promise(function (resolve, reject) {

      fetch(URL + "?content=" + JSON.stringify(objData), objRequest)
        .then(function (response) {
          app.$data.block = false;
          response.json()
            .then(function (dataResponse) {
              if (dataResponse.state)
                resolve(dataResponse);
              else
                reject(dataResponse.message);
            })
            .catch(function (err) {
              reject("SIE [ERROR]: (json) \n" + err);
            });
        }).catch(function (err) {
          app.$data.block = false;
          reject("SIE [ERROR]: (fetch) \n" + err);
        });

    });
    return myPromise;
  };
  this.list = function (c, o, data, metaData) {

    if (this.verifyBlock(c, o))
      return Promise.reject();

    let objData = this.request(c, o, data, metaData);

    let objRequest = {
      method: 'GET',
      headers: reqHeader
    };

    let myPromise = new Promise(function (resolve, reject) {
      fetch(URL + "?content=" + JSON.stringify(objData), objRequest)
        .then(function (response) {
          app.$data.block = false;
          response.json()
            .then(function (dataResponse) {
              if (dataResponse.state)
                resolve(dataResponse);
              else
                reject(dataResponse);
            })
            .catch(function (err) {
              reject("SIE [ERROR]: (json) \n" + err);
            });
        }).catch(function (err) {
          app.$data.block = false;
          reject("SIE [ERROR]: (fetch) \n" + err);
        });
    });
    return myPromise;
  };
  this.update = function (c, o, data, metaData) {

    if (this.verifyBlock(c, o))
      return Promise.reject();

    let objData = this.request(c, o, data, metaData);

    let objRequest = {
      method: 'PUT',
      headers: reqHeader,
      body: JSON.stringify(objData)
    };

    let myPromise = new Promise(function (resolve, reject) {
      fetch(URL, objRequest)
        .then(function (response) {
          app.$data.block = false;
          response.json()
            .then(function (dataResponse) {
              if (dataResponse.state)
                resolve(dataResponse);
              else
                reject(dataResponse);
            })
            .catch(function (err) {
              reject("SIE [ERROR]: (json) \n" + err);
            });
        }).catch(function (err) {
          app.$data.block = false;
          reject("SIE [ERROR]: (fetch) \n" + err);
        });
    });
    return myPromise;
  };
  this.insert = function (c, o, data, metaData) {
    if (this.verifyBlock(c, o))
      return Promise.reject();

    let objData = this.request(c, o, data, metaData);

    let objRequest = {
      method: 'POST',
      headers: reqHeader,
      body: JSON.stringify(objData)
    };
    var selfURL = this.URL;

    let myPromise = new Promise(function (resolve, reject) {
      fetch(selfURL, objRequest)
        .then(function (response) {
          app.$data.block = false;
          response.json()
            .then(function (dataResponse) {
              if (dataResponse.state)
                resolve(dataResponse);
              else
                reject(dataResponse);
            })
            .catch(function (err) {
              reject("SIE [ERROR]: (json) \n" + err);
            });
        }).catch(function (err) {
          app.$data.block = false;
          reject("SIE [ERROR]: (fetch) \n" + err);
        });
    });
    return myPromise;
  };
  this.delete = function (c, o, data, metaData) {
    if (this.verifyBlock(c, o))
      return Promise.reject();

    let objData = this.request(c, o, data, metaData);

    let objRequest = {
      method: 'DELETE',
      headers: reqHeader,
      body: JSON.stringify(objData)
    };

    let myPromise = new Promise(function (resolve, reject) {
      fetch(URL, objRequest)
        .then(function (response) {
          app.$data.block = false;
          response.json()
            .then(function (dataResponse) {
              if (dataResponse.state)
                resolve(dataResponse);
              else
                reject(dataResponse);
            })
            .catch(function (err) {
              reject("SIE [ERROR]: (json) \n" + err);
            });
        }).catch(function (err) {
          app.$data.block = false;
          reject("SIE [ERROR]: (fetch) \n" + err);
        });
    });
    return myPromise;
  };

  this.verifyBlock = function (c, o) {

    if (c == undefined && !c) {
      console.log("SIE [ERROR]: ", "miss component!!");
      return true;
    }
    if (o == undefined && !o) {
      console.log("SIE [ERROR]: ", "miss operation!!");
      return true;
    }

    /// verify the disponibilite
    if (app.$data.block) {
      console.log("SIE [ERROR]: ", "wait ending operation");
      return true;
    }

    /// verify token
    var jwt = localStorage.getItem('jwt');
    if (jwt) {
      reqHeader.append("authorization", jwt);
    } else {
      console.log("SIE [ERROR]: ", "authorization denied");
      //app.$data.block = false;
      return true;
    }
    app.$data.block = true;
    return false;
  };

  this.request = function (component, operation, data, metaData) {

    var requestObj = {
      "signature": "sie.req",
      "ide": "1",
      "component": component,
      "operation": operation,
      "data": data ? data : "",
      "metaData": metaData ? metaData : ""
    }
    return requestObj;
  }
}