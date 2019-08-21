export * from './accounts';
export * from './users';

export const apiGetUserAccounts = (url, user) => () =>
  fetch(`${url}/${user.id}`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${user.accessToken}`
    }
  })
    .then(res =>
      res.json()
        .then(data => data.accounts)
    );

export const apiGetUserByCredentials = (url, user) => () => {
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
          if(data.errors){
            return Promise.reject({
              username: data.errors[0]
            });
          }
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

export const apiPostCampaign = (url, user, campaign) => () => {
  const params = new URLSearchParams();
  params.append('name', campaign.name);
  params.append('account', campaign.account);
  return fetch(`${url}`, {
    method: 'POST',
    body: params,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${user.accessToken}`
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
          return data;
        })
    );
}

export const apiPostCampaignSpec = (url, user, spec) => () => {
  const params = new URLSearchParams();
  params.append('quantity', spec.quantity);
  params.append('content', spec.content);
  params.append('campaign', spec.campaign);
  return fetch(`${url}`, {
    method: 'POST',
    body: params,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${user.accessToken}`
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
          return data;
        })
    );
}

export const apiGetCampaignsByAccount = (url, user, account) => () =>
  fetch(`${url}ByAccount/${account}`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${user.accessToken}`
    }
  })
    .then(res => res.json());

export const apiGetSpecsByCampaign = (url, user, campaign) => () =>
  fetch(`${url}ByCampaign/${campaign}`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${user.accessToken}`
    }
  })
    .then(res =>
      res.json()
        .then(data => {
          return data;
        })
    );

export const apiGetMediums = (url, user) => () =>
  fetch(`${url}`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${user.accessToken}`
    }
  })
    .then(res => res.json());

export const apiGetAdFormatsByMedium = (url, user, medium) => () =>
  fetch(`${url}ByMedium/${medium}`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${user.accessToken}`
    }
  })
    .then(res => res.json());

export const apiGetCreativesByAdFormat = (url, user, adFormat) => () =>
  fetch(`${url}ByAdFormat/${adFormat}`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${user.accessToken}`
    }
  })
    .then(res => res.json());

export const apiGetContentsByCreative = (url, user, creative) => () =>
  fetch(`${url}ByCreative/${creative}`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${user.accessToken}`
    }
  })
    .then(res => res.json());

export const apiGetContentTypes = (url, user) => () =>
  fetch(`${url}`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${user.accessToken}`
    }
  })
    .then(res => res.json());

export const apiGetContentFormatsByContentType = (url, user, contentType) => () =>
  fetch(`${url}ByContentType/${contentType}`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${user.accessToken}`
    }
  })
    .then(res => res.json());

export const apiPostSpec = (creativesUrl, contentsUrl, user, spec) => () => {
  const creativeParams = new URLSearchParams();
  creativeParams.append('name', spec.creative.name);
  creativeParams.append('text', spec.creative.text ? spec.creative.text : 0);
  creativeParams.append('title', spec.creative.title ? spec.creative.title : 0);
  creativeParams.append('description', spec.creative.description ? spec.creative.description : 0);
  if (spec.creative.image){
    creativeParams.append('image', spec.creative.image);
  }
  //TODO: Organizar el nombre de la llave format, debe ser adFormat (actions, reducers, etc)
  creativeParams.append('adFormat', spec.format);
  return fetch(`${creativesUrl}`, {
    method: 'POST',
    body: creativeParams,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${user.accessToken}`
    }
  })
    .then(res =>
      res.json()
        .then(creative => {
          /*return Promise.reject({
            username: 'Usuario o contraseña inválidos'
          });*/
          let contents = [];
          for (let i = 0; i < Object.values(spec.content).length; i ++){
            contents.push(new Promise((resolve, reject) => {
              let content = Object.values(spec.content)[i];
              const contentParams = new URLSearchParams();
              contentParams.append('size', content.size);
              contentParams.append('weight', content.weight);
              if (content.length) {
                contentParams.append('length', content.length);
              }
              if (content.observation) {
                contentParams.append('observation', content.observation);
              }
              contentParams.append('contentFormat', content.contentFormat.id);
              contentParams.append('creative', creative.id);
              resolve(fetch(`${contentsUrl}`, {
                method: 'POST',
                body: contentParams,
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'Authorization': `Bearer ${user.accessToken}`
                }
              })
                .then(res => res.json()));
            }));
          }
          return Promise.all(contents)
            .then(contents => {
              return contents;
            });
        })
    );
}