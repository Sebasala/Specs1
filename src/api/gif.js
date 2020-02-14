// Retorna una función porque eso espera el payloadCreator

export const apiVerifyDriveConnection = (url, user) => () => {
  return fetch(`${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${user.accessToken}`
    }
  })
    .then(res => ({}));
}

export const apiSetConnectionToken = (url, user) => () => {
  return fetch(`${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${user.accessToken}`
    }
  })
    .then(res => ({}));
}

/*export const apiUploadGif = _(url, user) => () => {
  const formData = new FormData();
  formData.append();
  return fetch(`${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${user.accessToken}`
    }
  })
    .then(res => ({}));
}

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var formdata = new FormData();
formdata.append("gif", fileInput.files[0], "PPL-OP.mp4");
formdata.append("fileName", "video");

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("http://localhost:3600/gifs/upload", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));*/