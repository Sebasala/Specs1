// Retorna una función porque eso espera el payloadCreator

export const apiDeleteSpec = (url, user, specId) => () => {
  return fetch(`${url}/${specId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${user.accessToken}`
    }
  })
    .then(res => ({}));
}