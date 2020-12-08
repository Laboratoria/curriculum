const createClient = (baseUrl, user) => async (url, opts = {}) => {
  const token = user ? await user.getIdToken() : null;
  const resp = await fetch(`${baseUrl}${url}`, {
    mode: 'cors',
    ...opts,
    headers: {
      ...(token && { authorization: `Bearer ${token}` }),
      ...(opts.body && { 'Content-Type': 'application/json' }),
      ...opts.headers,
    },
    ...(opts.body && { body: JSON.stringify(opts.body) }),
  });

  const body = await resp.json();

  if (resp.status > 202) {
    throw Object.assign(new Error(`HTTP Error ${resp.status}`), {
      status: resp.status,
      body,
    });
  }

  return body;
};

export default createClient;