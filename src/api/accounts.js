// Retorna una función porque eso espera el payloadCreator
export const apiGetAccounts = (url, user) => () =>
  fetch(`${url}`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${user.accessToken}`
    }
  })
    .then(res => res.json());

export const apiPostAccount = (url, user, accountData) => () => {
  const params = new URLSearchParams();
  params.append('name', accountData.name);
  if (accountData.logo) {
    params.append('logo', accountData.logo);
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

export const apiPatchAccount = (url, user, accountData) => () => {
  const params = new URLSearchParams();
  if (accountData.name) {
    params.append('name', accountData.name);
  }
  if (accountData.logo) {
    params.append('logo', accountData.logo);
  }
  return fetch(`${url}/${accountData.id}`, {
    method: 'PATCH',
    body: params,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${user.accessToken}`
    }
  })
    .then(res => res);
}

export const apiDeleteAccount = (url, user, accountId) => () => {
  return fetch(`${url}/${accountId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${user.accessToken}`
    }
  })
    .then(res => ({}));
}