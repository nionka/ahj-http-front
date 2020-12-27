/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

export default function sendRequest(method, url, id = null, body = null) {
  const reqUrl = 'https://ahj-http.herokuapp.com/';

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    if (id) {
      xhr.open(method, `${reqUrl}?method=${url}&id=${id}`);
    } else {
      xhr.open(method, `${reqUrl}?method=${url}`);
    }

    xhr.responseType = 'json';

    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject(xhr.response);
    };

    xhr.send(JSON.stringify(body));
  });
}
