const { fetch, fetchAsTestUser, fetchAsAdmin } = process;


describe('POST /orders', () => {
  it('should fail with 401 when no auth', () => (
    fetch('/orders', { method: 'POST' })
      .then(resp => expect(resp.status).toBe(401))
  ));

  it('should fail with 400 when bad props', () => (
    fetchAsTestUser('/orders', { method: 'POST', body: {} })
      .then(resp => expect(resp.status).toBe(400))
  ));

  it('should fail with 400 when empty items', () => (
    fetchAsTestUser('/orders', {
      method: 'POST',
      body: { items: [] },
    })
      .then((resp) => {
        expect(resp.status).toBe(400);
      })
  ));

  it('should create order as user (own order)', () => (
    fetchAsTestUser('/orders', {
      method: 'POST',
      body: { items: [{ name: 'Test', price: 50 }] },
    })
      .then((resp) => {
        expect(resp.status).toBe(200);
        return resp.json();
      })
      .then((json) => {
        expect(typeof json._id).toBe('string');
        expect(typeof json.createdAt).toBe('string');
        expect(typeof json.createdBy).toBe('string');
        expect(Array.isArray(json.items)).toBe(true);
        expect(json.items.length).toBe(1);
        expect(json.items[0].name).toBe('Test');
        expect(json.items[0].price).toBe(50);
      })
  ));

  it('should create order as admin', () => (
    fetchAsAdmin('/orders', {
      method: 'POST',
      body: { items: [{ name: 'Test', price: 25 }] },
    })
      .then((resp) => {
        expect(resp.status).toBe(200);
        return resp.json();
      })
      .then((json) => {
        expect(typeof json._id).toBe('string');
        expect(typeof json.createdAt).toBe('string');
        expect(typeof json.createdBy).toBe('string');
        expect(Array.isArray(json.items)).toBe(true);
        expect(json.items.length).toBe(1);
        expect(json.items[0].name).toBe('Test');
        expect(json.items[0].price).toBe(25);
      })
  ));
});


describe('GET /orders', () => {
  it('should fail with 401 when no auth', () => (
    fetch('/orders')
      .then(resp => expect(resp.status).toBe(401))
  ));

  it('should get orders as user (only own orders)', () => (
    Promise.all([
      fetchAsTestUser('/orders', {
        method: 'POST',
        body: { items: [{ name: 'Test', price: 50 }] },
      }),
      fetchAsAdmin('/orders', {
        method: 'POST',
        body: { items: [{ name: 'Test', price: 25 }] },
      }),
    ])
      .then((responses) => {
        expect(responses[0].status).toBe(200);
        expect(responses[1].status).toBe(200);
        return fetchAsTestUser('/orders');
      })
      .then((resp) => {
        expect(resp.status).toBe(200);
        return resp.json();
      })
      .then((orders) => {
        expect(Array.isArray(orders)).toBe(true);
        expect(orders.length > 0);
        const userIds = orders.reduce((memo, order) => (
          (memo.indexOf(order.createdBy) === -1)
            ? [...memo, order.createdBy]
            : memo
        ), []);
        expect(userIds.length).toBe(1);
        return fetchAsTestUser('/users/test@test.test')
          .then(resp => ({ resp, orders }));
      })
      .then(({ resp, orders }) => {
        expect(resp.status).toBe(200);
        return resp.json().then(user => ({ user, orders }));
      })
      .then(({ user, orders }) => {
        orders.forEach((order) => {
          expect(order.createdBy).toBe(user._id);
        });
      })
  ));

  it('should get orders as admin (all orders)', () => (
    Promise.all([
      fetchAsTestUser('/orders', {
        method: 'POST',
        body: { items: [{ name: 'Test', price: 50 }] },
      }),
      fetchAsAdmin('/orders', {
        method: 'POST',
        body: { items: [{ name: 'Test', price: 25 }] },
      }),
    ])
      .then((responses) => {
        expect(responses[0].status).toBe(200);
        expect(responses[1].status).toBe(200);
        return fetchAsAdmin('/orders');
      })
      .then((resp) => {
        expect(resp.status).toBe(200);
        return resp.json();
      })
      .then((orders) => {
        expect(Array.isArray(orders)).toBe(true);
        expect(orders.length > 0);
        const userIds = orders.reduce((memo, order) => (
          (memo.indexOf(order.createdBy) === -1)
            ? [...memo, order.createdBy]
            : memo
        ), []);
        expect(userIds.length > 1).toBe(true);
      })
  ));

  // it('should get orders with pagination', () => {});

  // it('should get orders where...', () => {});
});


describe('GET /orders/:orderid', () => {
  it('should fail with 401 when no auth', () => (
    fetch('/orders/xxx')
      .then(resp => expect(resp.status).toBe(401))
  ));

  it('should fail with 403 when not owner nor admin', () => (
    fetchAsAdmin('/orders', {
      method: 'POST',
      body: { items: [{ name: 'Test', price: 25 }] },
    })
      .then((resp) => {
        expect(resp.status).toBe(200);
        return resp.json();
      })
      .then(json => fetchAsTestUser(`/orders/${json._id}`))
      .then(resp => expect(resp.status).toBe(403))
  ));

  it('should fail with 404 when admin and not found', () => (
    fetchAsAdmin('/orders/xxx')
      .then(resp => expect(resp.status).toBe(404))
  ));

  it('should get order as user (own order)', () => (
    fetchAsTestUser('/orders', {
      method: 'POST',
      body: { items: [{ name: 'Test', price: 99 }] },
    })
      .then((resp) => {
        expect(resp.status).toBe(200);
        return resp.json();
      })
      .then(json => fetchAsTestUser(`/orders/${json._id}`))
      .then((resp) => {
        expect(resp.status).toBe(200);
        return resp.json();
      })
      .then((json) => {
        expect(json.items.length).toBe(1);
        expect(json.items[0].name).toBe('Test');
        expect(json.items[0].price).toBe(99);
      })
  ));

  it('should get order as admin (someone else\'s order)', () => (
    fetchAsTestUser('/orders', {
      method: 'POST',
      body: { items: [{ name: 'Test', price: 55 }] },
    })
      .then((resp) => {
        expect(resp.status).toBe(200);
        return resp.json();
      })
      .then(json => fetchAsAdmin(`/orders/${json._id}`))
      .then((resp) => {
        expect(resp.status).toBe(200);
        return resp.json();
      })
      .then((json) => {
        expect(json.items.length).toBe(1);
        expect(json.items[0].name).toBe('Test');
        expect(json.items[0].price).toBe(55);
      })
  ));
});


describe('PUT /orders/:orderid', () => {
  it('should fail with 401 when no auth', () => (
    fetch('/orders/xxx', { method: 'PUT' })
      .then(resp => expect(resp.status).toBe(401))
  ));

  it('should fail with 403 when not admin', () => (
    fetchAsTestUser('/orders/xxx', { method: 'PUT' })
      .then(resp => expect(resp.status).toBe(403))
  ));

  it('should fail with 404 when admin and not found', () => (
    fetchAsAdmin('/orders/xxx', { method: 'PUT' })
      .then(resp => expect(resp.status).toBe(404))
  ));

  it('should fail with 400 when bad props', () => (
    fetchAsTestUser('/orders', {
      method: 'POST',
      body: { items: [{ name: 'Test', price: 66 }] },
    })
      .then((resp) => {
        expect(resp.status).toBe(200);
        return resp.json();
      })
      .then(json => fetchAsAdmin(`/orders/${json._id}`, { method: 'PUT' }))
      .then(resp => expect(resp.status).toBe(400))
  ));

  it('should fail with 400 when bad status', () => (
    fetchAsTestUser('/orders', {
      method: 'POST',
      body: { items: [{ name: 'Test', price: 66 }] },
    })
      .then((resp) => {
        expect(resp.status).toBe(200);
        return resp.json();
      })
      .then(json => fetchAsAdmin(`/orders/${json._id}`, {
        method: 'PUT',
        body: { status: 'oh yeah!' },
      }))
      .then(resp => expect(resp.status).toBe(400))
  ));

  it('should update order as admin (set status to preparing)', () => (
    fetchAsTestUser('/orders', {
      method: 'POST',
      body: { items: [{ name: 'Test', price: 66 }] },
    })
      .then((resp) => {
        expect(resp.status).toBe(200);
        return resp.json();
      })
      .then((json) => {
        expect(json.status).toBe('pending');
        return fetchAsAdmin(`/orders/${json._id}`, {
          method: 'PUT',
          body: { status: 'preparing' },
        });
      })
      .then((resp) => {
        expect(resp.status).toBe(200);
        return resp.json();
      })
      .then(json => expect(json.status).toBe('preparing'))
  ));

  it('should update order as admin (set status to delivering)', () => (
    fetchAsTestUser('/orders', {
      method: 'POST',
      body: { items: [{ name: 'Test', price: 66 }] },
    })
      .then((resp) => {
        expect(resp.status).toBe(200);
        return resp.json();
      })
      .then((json) => {
        expect(json.status).toBe('pending');
        return fetchAsAdmin(`/orders/${json._id}`, {
          method: 'PUT',
          body: { status: 'delivering' },
        });
      })
      .then((resp) => {
        expect(resp.status).toBe(200);
        return resp.json();
      })
      .then(json => expect(json.status).toBe('delivering'))
  ));

  it('should update order as admin (set status to delivered)', () => (
    fetchAsTestUser('/orders', {
      method: 'POST',
      body: { items: [{ name: 'Test', price: 66 }] },
    })
      .then((resp) => {
        expect(resp.status).toBe(200);
        return resp.json();
      })
      .then((json) => {
        expect(json.status).toBe('pending');
        return fetchAsAdmin(`/orders/${json._id}`, {
          method: 'PUT',
          body: { status: 'delivered' },
        });
      })
      .then((resp) => {
        expect(resp.status).toBe(200);
        return resp.json();
      })
      .then(json => expect(json.status).toBe('delivered'))
  ));
});


describe('DELETE /orders/:orderid', () => {
  it('should fail with 401 when no auth', () => (
    fetch('/orders/xxx', { method: 'DELETE' })
      .then(resp => expect(resp.status).toBe(401))
  ));

  it('should fail with 403 when not admin', () => (
    fetchAsTestUser('/orders/xxx', { method: 'DELETE' })
      .then(resp => expect(resp.status).toBe(403))
  ));

  it('should fail with 404 when admin and not found', () => (
    fetchAsAdmin('/orders/xxx', { method: 'DELETE' })
      .then(resp => expect(resp.status).toBe(404))
  ));

  it('should delete other order as admin', () => (
    fetchAsAdmin('/orders', {
      method: 'POST',
      body: { items: [{ name: 'Test', price: 25 }] },
    })
      .then((resp) => {
        expect(resp.status).toBe(200);
        return resp.json();
      })
      .then(
        ({ _id }) => fetchAsAdmin(`/orders/${_id}`, { method: 'DELETE' })
          .then(resp => ({ resp, _id })),
      )
      .then(({ resp, _id }) => {
        expect(resp.status).toBe(200);
        return fetchAsAdmin(`/orders/${_id}`);
      })
      .then(resp => expect(resp.status).toBe(404))
  ));
});
