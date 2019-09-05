// Retorna una función porque eso espera el payloadCreator
export const apiGetUsers = (url, user) => () =>
  fetch(`${url}`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${user.accessToken}`
    }
  })
    .then(res => res.json());

export const apiPostUser = (url, user, userData) => () => {
  const params = new URLSearchParams();
  params.append('firstName', userData.firstName);
  params.append('lastName', userData.lastName);
  params.append('email', userData.email);
  params.append('password', userData.password);
  params.append('permissionLevel', userData.permissionLevel);
  if (userData.accounts && userData.accounts.length > 0) {
    for (let i = 0; i < userData.accounts.length; i++) {
      params.append('accounts[]', userData.accounts[i]);
    }
  }
  return fetch(`${url}`, {
    method: 'POST',
    body: params,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${user.accessToken}`
    }
  })
    .then(res => res.json())
    .then(r => {
      if (r.error) {
        return Promise.reject(r.validation);
      }
      return r;
    });
}

export const apiPatchUser = (url, user, userData) => () => {
  const params = new URLSearchParams();
  if (userData.firstName) {
    params.append('firstName', userData.firstName);
  }
  if (userData.lastName) {
    params.append('lastName', userData.lastName);
  }
  if (userData.email) {
    params.append('email', userData.email);
  }
  if (userData.password) {
    params.append('password', userData.password);
  }
  if (userData.permissionLevel) {
    params.append('permissionLevel', userData.permissionLevel);
  }
  if (userData.accounts && userData.accounts.length > 0) {
    for (let i = 0; i < userData.accounts.length; i++) {
      params.append('accounts[]', userData.accounts[i]);
    }
  }
  return fetch(`${url}/${userData.id}`, {
    method: 'PATCH',
    body: params,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${user.accessToken}`
    }
  })
    .then(res => res);
}

export const apiDeleteUser = (url, user, userId) => () => {
  return fetch(`${url}/${userId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${user.accessToken}`
    }
  })
    .then(res => ({}));
}