// Retorna una función porque eso espera el payloadCreator

export const apiLoginUser = (url, user) => () => {
  const params = new URLSearchParams();
  params.append('email', user.username);
  params.append('password', user.password);
  return fetch(`${url}`, {
    method: 'POST',
    body: params,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
    .then(res =>
      res.json()
        .then(data => {
          if (data.errors) {
            return Promise.reject({
              username: data.errors[0]
            });
          }
          const { accessToken: token } = data;
          localStorage.setItem('jwtToken', token);
          return data;
        })
    );
  /*.then(v => {
    return v.json().then(d => {
      if (d.length === 0) {
        return Promise.reject({
          username: 'Usuario o contraseña inválidos'
        });
      }
      console.log(d[0]);
      return d[0];
    });
  })
  .then(r => {
    if (r.error) {
      return Promise.reject(r.validation);
    }
    return r;
  });*/
}

export const apiLogoutUser = () => () => {
  localStorage.removeItem('jwtToken');
  localStorage.removeItem('stateTimestamp');
  localStorage.removeItem('state');
}