const url = require('url');
const qs = require('querystring');
const config = require('../config');


const {
  fetch,
  fetchAsTestUser,
  fetchAsAdmin,
  fetchWithAuth,
} = process;


const parseLinkHeader = (str) => str.split(',')
  .reduce((memo, item) => {
    const [, value, key] = /^<(.*)>;\s+rel="(first|last|prev|next)"/.exec(item.trim());
    return { ...memo, [key]: value };
  }, {});


describe('GET /users', () => {
  it('should fail with 401 when no auth', () => (
    fetch('/users').then((resp) => expect(resp.status).toBe(401))
  ));

  it('should fail with 403 when not admin', () => (
    fetchAsTestUser('/users')
      .then((resp) => expect(resp.status).toBe(403))
  ));

  it('should get users', () => (
    fetchAsAdmin('/users')
      .then((resp) => {
        expect(resp.status).toBe(200);
        return resp.json();
      })
      .then((json) => {
        expect(Array.isArray(json)).toBe(true);
        expect(json.length > 0).toBe(true);
        // TODO: Check that the results are actually the "expected" user objects
      })
  ));

  it('should get users with pagination', () => (
    fetchAsAdmin('/users?limit=1')
      .then((resp) => {
        expect(resp.status).toBe(200);
        return resp.json().then((json) => ({ headers: resp.headers, json }));
      })
      .then(({ headers, json }) => {
        const linkHeader = parseLinkHeader(headers.get('link'));

        const nextUrlObj = url.parse(linkHeader.next);
        const lastUrlObj = url.parse(linkHeader.last);
        const nextQuery = qs.parse(nextUrlObj.query);
        const lastQuery = qs.parse(lastUrlObj.query);

        expect(nextQuery.limit).toBe('1');
        expect(nextQuery.page).toBe('2');
        expect(lastQuery.limit).toBe('1');
        expect(lastQuery.page >= 2).toBe(true);

        expect(Array.isArray(json)).toBe(true);
        expect(json.length).toBe(1);
        expect(json[0]).toHaveProperty('_id');
        expect(json[0]).toHaveProperty('email');
        return fetchAsAdmin(nextUrlObj.path);
      })
      .then((resp) => {
        expect(resp.status).toBe(200);
        return resp.json().then((json) => ({ headers: resp.headers, json }));
      })
      .then(({ headers, json }) => {
        const linkHeader = parseLinkHeader(headers.get('link'));

        const firstUrlObj = url.parse(linkHeader.first);
        const prevUrlObj = url.parse(linkHeader.prev);

        const firstQuery = qs.parse(firstUrlObj.query);
        const prevQuery = qs.parse(prevUrlObj.query);

        expect(firstQuery.limit).toBe('1');
        expect(firstQuery.page).toBe('1');
        expect(prevQuery.limit).toBe('1');
        expect(prevQuery.page).toBe('1');

        expect(Array.isArray(json)).toBe(true);
        expect(json.length).toBe(1);
        expect(json[0]).toHaveProperty('_id');
        expect(json[0]).toHaveProperty('email');
      })
  ));
});


describe('GET /users/:uid', () => {
  it('should fail with 401 when no auth', () => (
    fetch('/users/foo@bar.baz').then((resp) => expect(resp.status).toBe(401))
  ));

  it('should fail with 403 when not owner nor admin', () => (
    fetchAsTestUser(`/users/${config.adminEmail}`)
      .then((resp) => expect(resp.status).toBe(403))
  ));

  it('should fail with 404 when admin and not found', () => (
    fetchAsAdmin('/users/abc@def.ghi')
      .then((resp) => expect(resp.status).toBe(404))
  ));

  it('should get own user', () => (
    fetchAsTestUser('/users/test@test.test')
      .then((resp) => {
        expect(resp.status).toBe(200);
        return resp.json();
      })
      .then((json) => expect(json.email).toBe('test@test.test'))
  ));

  it('should get other user as admin', () => (
    fetchAsAdmin('/users/test@test.test')
      .then((resp) => {
        expect(resp.status).toBe(200);
        return resp.json();
      })
      .then((json) => expect(json.email).toBe('test@test.test'))
  ));
});


describe('POST /users', () => {
  it('should respond with 400 when email and password missing', () => (
    fetchAsAdmin('/users', { method: 'POST' })
      .then((resp) => expect(resp.status).toBe(400))
  ));

  it('should respond with 400 when email is missing', () => (
    fetchAsAdmin('/users', { method: 'POST', body: { email: '', password: 'xxxx' } })
      .then((resp) => expect(resp.status).toBe(400))
  ));

  it('should respond with 400 when password is missing', () => (
    fetchAsAdmin('/users', { method: 'POST', body: { email: 'foo@bar.baz' } })
      .then((resp) => expect(resp.status).toBe(400))
  ));

  it('should fail with 400 when invalid email', () => (
    fetchAsAdmin('/users', { method: 'POST', body: { email: 'failemail', password: '123456' } })
      .then((resp) => expect(resp.status).toBe(400))
  ));

  it('should fail with 400 when invalid password', () => (
    fetchAsAdmin('/users', { method: 'POST', body: { email: 'email@test.tes', password: '12' } })
      .then((resp) => expect(resp.status).toBe(400))
  ));

  it('should create new user', () => (
    fetchAsAdmin('/users', {
      method: 'POST',
      body: {
        email: 'test1@test.test',
        password: '12345',
        roles: { admin: false },
      },
    })
      .then((resp) => {
        expect(resp.status).toBe(200);
        return resp.json();
      })
      .then((json) => {
        expect(typeof json._id).toBe('string');
        expect(typeof json.email).toBe('string');
        expect(typeof json.password).toBe('undefined');
        expect(typeof json.roles).toBe('object');
        expect(json.roles.admin).toBe(false);
      })
  ));

  it('should create new admin user', () => (
    fetchAsAdmin('/users', {
      method: 'POST',
      body: {
        email: 'admin1@test.test',
        password: '12345',
        roles: { admin: true },
      },
    })
      .then((resp) => {
        expect(resp.status).toBe(200);
        return resp.json();
      })
      .then((json) => {
        expect(typeof json._id).toBe('string');
        expect(typeof json.email).toBe('string');
        expect(typeof json.password).toBe('undefined');
        expect(typeof json.roles).toBe('object');
        expect(json.roles.admin).toBe(true);
      })
  ));

  it('should fail with 403 when user is already registered', () => (
    fetchAsAdmin('/users', {
      method: 'POST',
      body: { email: 'test@test.test', password: '123456' },
    })
      .then((resp) => expect(resp.status).toBe(403))
  ));
});


describe('PUT /users/:uid', () => {
  it('should fail with 401 when no auth', () => (
    fetch('/users/foo@bar.baz', { method: 'PUT' })
      .then((resp) => expect(resp.status).toBe(401))
  ));

  it('should fail with 403 when not owner nor admin', () => (
    fetchAsTestUser(`/users/${config.adminEmail}`, { method: 'PUT' })
      .then((resp) => expect(resp.status).toBe(403))
  ));

  it('should fail with 404 when admin and not found', () => (
    fetchAsAdmin('/users/abc@def.gih', { method: 'PUT' })
      .then((resp) => expect(resp.status).toBe(404))
  ));

  it('should fail with 400 when no props to update', () => (
    fetchAsTestUser('/users/test@test.test', { method: 'PUT' })
      .then((resp) => expect(resp.status).toBe(400))
  ));

  it('should fail with 403 when not admin tries to change own roles', () => (
    fetchAsTestUser('/users/test@test.test', {
      method: 'PUT',
      body: { roles: { admin: true } },
    })
      .then((resp) => expect(resp.status).toBe(403))
  ));

  it('should update user when own data (password change)', () => (
    fetchAsTestUser('/users/test@test.test', {
      method: 'PUT',
      body: { password: 'garmadon' },
    })
      .then((resp) => expect(resp.status).toBe(200))
      .then(() => fetch('/auth', {
        method: 'POST',
        body: { email: 'test@test.test', password: 'garmadon' },
      }))
      .then((resp) => {
        expect(resp.status).toBe(200);
        return resp.json();
      })
      .then((json) => expect(json).toHaveProperty('token'))
  ));

  it('should update user when admin', () => (
    fetchAsAdmin('/users/test@test.test', {
      method: 'PUT',
      body: { password: 'ohmygod' },
    })
      .then((resp) => expect(resp.status).toBe(200))
      .then(() => fetch('/auth', {
        method: 'POST',
        body: { email: 'test@test.test', password: 'ohmygod' },
      }))
      .then((resp) => {
        expect(resp.status).toBe(200);
        return resp.json();
      })
      .then((json) => expect(json).toHaveProperty('token'))
  ));
});


describe('DELETE /users/:uid', () => {
  it('should fail with 401 when no auth', () => (
    fetch('/users/foo@bar.baz', { method: 'DELETE' })
      .then((resp) => expect(resp.status).toBe(401))
  ));

  it('should fail with 403 when not owner nor admin', () => (
    fetchAsTestUser(`/users/${config.adminEmail}`, { method: 'DELETE' })
      .then((resp) => expect(resp.status).toBe(403))
  ));

  it('should fail with 404 when admin and not found', () => (
    fetchAsAdmin('/users/abc@def.ghi', { method: 'DELETE' })
      .then((resp) => expect(resp.status).toBe(404))
  ));

  it('should delete own user', () => {
    const credentials = { email: `foo-${Date.now()}@bar.baz`, password: '1234' };
    return fetchAsAdmin('/users', { method: 'POST', body: credentials })
      .then((resp) => expect(resp.status).toBe(200))
      .then(() => fetch('/auth', { method: 'POST', body: credentials }))
      .then((resp) => {
        expect(resp.status).toBe(200);
        return resp.json();
      })
      .then(({ token }) => fetchWithAuth(token)(`/users/${credentials.email}`, {
        method: 'DELETE',
      }))
      .then((resp) => expect(resp.status).toBe(200))
      .then(() => fetchAsAdmin(`/users/${credentials.email}`))
      .then((resp) => expect(resp.status).toBe(404));
  });

  it('should delete other user as admin', () => {
    const credentials = { email: `foo-${Date.now()}@bar.baz`, password: '1234' };
    return fetchAsAdmin('/users', { method: 'POST', body: credentials })
      .then((resp) => expect(resp.status).toBe(200))
      .then(() => fetchAsAdmin(`/users/${credentials.email}`, { method: 'DELETE' }))
      .then((resp) => expect(resp.status).toBe(200))
      .then(() => fetchAsAdmin(`/users/${credentials.email}`))
      .then((resp) => expect(resp.status).toBe(404));
  });
});
