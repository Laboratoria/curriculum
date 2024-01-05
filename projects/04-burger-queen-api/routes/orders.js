const {
  requireAuth,
} = require('../middleware/auth');

/** @module orders */
module.exports = (app, nextMain) => {
  /**
   * @name GET /orders
   * @description List orders
   * @path {GET} /orders
   * @query {String} [_page=1] Page of the list to consult
   * @query {String} [_limit=10] Number of elements per page
   * @auth Requires authentication `token`
   * @response {Array} orders
   * @response {String} orders[].id Id
   * @response {String} orders[].userId Id of the user who created the order
   * @response {String} orders[].client Client for whom the order was created
   * @response {Array} orders[].products Products
   * @response {Object} orders[].products[] Product
   * @response {Number} orders[].products[].qty Quantity
   * @response {Object} orders[].products[].product Product
   * @response {String} orders[].status Status: `pending`, `canceled`, `delivering`, or `delivered`
   * @response {Date} orders[].dateEntry Creation date
   * @response {Date} [orders[].dateProcessed] Date of `status` change to `delivered`
   * @code {200} if authentication is successful
   * @code {401} if there is no authentication header
   */
  app.get('/orders', requireAuth, (req, resp, next) => {
  });

  /**
   * @name GET /orders/:orderId
   * @description Get the data of a specific order
   * @path {GET} /orders/:orderId
   * @params {String} :orderId `id` of the order to consult
   * @auth Requires authentication `token`
   * @response {Object} order
   * @response {String} order.id Id
   * @response {String} order.userId Id of the user who created the order
   * @response {String} order.client Client for whom the order was created
   * @response {Array} order.products Products
   * @response {Object} order.products[] Product
   * @response {Number} order.products[].qty Quantity
   * @response {Object} order.products[].product Product
   * @response {String} order.status Status: `pending`, `canceled`, `delivering`, or `delivered`
   * @response {Date} order.dateEntry Creation date
   * @response {Date} [order.dateProcessed] Date of `status` change to `delivered`
   * @code {200} if authentication is successful
   * @code {401} if there is no authentication header
   * @code {404} if the order with the specified `orderId` does not exist
   */
  app.get('/orders/:orderId', requireAuth, (req, resp, next) => {
  });

  /**
   * @name POST /orders
   * @description Create a new order
   * @path {POST} /orders
   * @auth Requires authentication `token`
   * @body {String} userId Id of the user who created the order
   * @body {String} client Client for whom the order was created
   * @body {Array} products Products
   * @body {Object} products[] Product
   * @body {String} products[].productId Id of a product
   * @body {Number} products[].qty Quantity of that product in the order
   * @response {Object} order
   * @response {String} order.id Id
   * @response {String} order.userId Id of the user who created the order
   * @response {String} order.client Client for whom the order was created
   * @response {Array} order.products Products
   * @response {Object} order.products[] Product
   * @response {Number} order.products[].qty Quantity
   * @response {Object} order.products[].product Product
   * @response {String} order.status Status: `pending`, `canceled`, `delivering`, or `delivered`
   * @response {Date} order.dateEntry Creation date
   * @response {Date} [order.dateProcessed] Date of `status` change to `delivered`
   * @code {200} if authentication is successful
   * @code {400} if `userId` is not provided or attempting to create an order without products
   * @code {401} if there is no authentication header
   */
  app.post('/orders', requireAuth, (req, resp, next) => {
  });

  /**
   * @name PUT /orders/:orderId
   * @description Modify an order
   * @path {PUT} /orders/:orderId
   * @params {String} :orderId `id` of the order
   * @auth Requires authentication `token`
   * @body {String} [userId] Id of the user who created the order
   * @body {String} [client] Client for whom the order was created
   * @body {Array} [products] Products
   * @body {Object} products[] Product
   * @body {String} products[].productId Id of a product
   * @body {Number} products[].qty Quantity of that product in the order
   * @body {String} [status] Status: `pending`, `canceled`, `delivering`, or `delivered`
   * @response {Object} order
   * @response {String} order.id Id
   * @response {String} order.userId Id of the user who created the order
   * @response {Array} order.products Products
   * @response {Object} order.products[] Product
   * @response {Number} order.products[].qty Quantity
   * @response {Object} order.products[].product Product
   * @response {String} order.status Status: `pending`, `canceled`, `delivering`, or `delivered`
   * @response {Date} order.dateEntry Creation date
   * @response {Date} [order.dateProcessed] Date of `status` change to `delivered`
   * @code {200} if authentication is successful
   * @code {400} if no properties to modify are indicated or the `status` property is not valid
   * @code {401} if there is no authentication header
   * @code {404} if the order with the specified `orderId` does not exist
   */
  app.put('/orders/:orderId', requireAuth, (req, resp, next) => {
  });

  /**
   * @name DELETE /orders/:orderId
   * @description Delete an order
   * @path {DELETE} /orders/:orderId
   * @params {String} :orderId `id` of the order
   * @auth Requires authentication `token`
   * @response {Object} order
   * @response {String} order.id Id
   * @response {String} order.userId Id of the user who created the order
   * @response {String} order.client Client for whom the order was created
   * @response {Array} order.products Products
   * @response {Object} order.products[] Product
   * @response {Number} order.products[].qty Quantity
   * @response {Object} order.products[].product Product
   * @response {String} order.status Status: `pending`, `canceled`, `delivering`, or `delivered`
   * @response {Date} order.dateEntry Creation date
   * @response {Date} [order.dateProcessed] Date of `status` change to `delivered`
   * @code {200} if authentication is successful
   * @code {401} if there is no authentication header
   * @code {404} if the order with the specified `orderId` does not exist
   */
  app.delete('/orders/:orderId', requireAuth, (req, resp, next) => {
  });

  nextMain();
};
