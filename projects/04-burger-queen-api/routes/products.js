const {
  requireAuth,
  requireAdmin,
} = require('../middleware/auth');

/** @module products */
module.exports = (app, nextMain) => {
  /**
   * @name GET /products
   * @description List products
   * @path {GET} /products
   * @query {String} [_page=1] Page of the list to consult
   * @query {String} [_limit=10] Number of elements per page
   * @auth Requires authentication `token`
   * @response {Array} products
   * @response {String} products[].id Id
   * @response {String} products[].name Name
   * @response {Number} products[].price Price
   * @response {URL} products[].image URL to the image
   * @response {String} products[].type Type/Category
   * @response {Date} products[].dateEntry Creation date
   * @code {200} if authentication is successful
   * @code {401} if there is no authentication header
   */
  app.get('/products', requireAuth, (req, resp, next) => {
  });

  /**
   * @name GET /products/:productId
   * @description Get the data of a specific product
   * @path {GET} /products/:productId
   * @params {String} :productId `id` of the product
   * @auth Requires authentication `token`
   * @response {Object} product
   * @response {String} product.id Id
   * @response {String} product.name Name
   * @response {Number} product.price Price
   * @response {URL} product.image URL to the image
   * @response {String} product.type Type/Category
   * @response {Date} product.dateEntry Creation date
   * @code {200} if authentication is successful
   * @code {401} if there is no authentication header
   * @code {404} if the product with the specified `productId` does not exist
   */
  app.get('/products/:productId', requireAuth, (req, resp, next) => {
  });

  /**
   * @name POST /products
   * @description Create a new product
   * @path {POST} /products
   * @auth Requires authentication `token` and the user to be an **admin**
   * @body {String} name Name
   * @body {Number} price Price
   * @body {String} [image] URL to the image
   * @body {String} [type] Type/Category
   * @response {Object} product
   * @response {String} product.id Id
   * @response {String} product.name Name
   * @response {Number} product.price Price
   * @response {URL} product.image URL to the image
   * @response {String} product.type Type/Category
   * @response {Date} product.dateEntry Creation date
   * @code {200} if authentication is correct
   * @code {400} if `name` or `price` are not provided
   * @code {401} if there is no authentication header
   * @code {403} if the user is not an admin
   * @code {404} if the product with the specified `productId` does not exist
   */
  app.post('/products', requireAdmin, (req, resp, next) => {
  });

  /**
   * @name PUT /products/:productId
   * @description Modify a product
   * @path {PUT} /products/:productId
   * @params {String} :productId `id` of the product
   * @auth Requires authentication `token` and the user to be an **admin**
   * @body {String} [name] Name
   * @body {Number} [price] Price
   * @body {String} [image] URL to the image
   * @body {String} [type] Type/Category
   * @response {Object} product
   * @response {String} product.id Id
   * @response {String} product.name Name
   * @response {Number} product.price Price
   * @response {URL} product.image URL to the image
   * @response {String} product.type Type/Category
   * @response {Date} product.dateEntry Creation date
   * @code {200} if authentication is correct
   * @code {400} if no properties to modify are indicated
   * @code {401} if there is no authentication header
   * @code {403} if the user is not an admin
   * @code {404} if the product with the specified `productId` does not exist
   */
  app.put('/products/:productId', requireAdmin, (req, resp, next) => {
  });

  /**
   * @name DELETE /products/:productId
   * @description Delete a product
   * @path {DELETE} /products/:productId
   * @params {String} :productId `id` of the product
   * @auth Requires authentication `token` and the user to be an **admin**
   * @response {Object} product
   * @response {String} product.id Id
   * @response {String} product.name Name
   * @response {Number} product.price Price
   * @response {URL} product.image URL to the image
   * @response {String} product.type Type/Category
   * @response {Date} product.dateEntry Creation date
   * @code {200} if authentication is correct
   * @code {401} if there is no authentication header
   * @code {403} if the user is not an admin
   * @code {404} if the product with the specified `productId` does not exist
   */
  app.delete('/products/:productId', requireAdmin, (req, resp, next) => {
  });

  nextMain();
};
