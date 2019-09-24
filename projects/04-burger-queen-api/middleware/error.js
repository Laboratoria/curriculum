const httpErrors = {
  400: 'Bad request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not found',
  500: 'Internal server error',
};

const isKnownHTTPErrorStatus = (num) => (
  typeof num === 'number' && Object.keys(httpErrors).indexOf(`${num}`) >= 0
);

// eslint-disable-next-line no-unused-vars
module.exports = (err, req, resp, next) => {
  const statusCode = (isKnownHTTPErrorStatus(err))
    ? err
    : err.statusCode || 500;
  const message = err.message || httpErrors[statusCode] || err;

  if (statusCode === 500) {
    console.error(statusCode, message);
  }

  resp.status(statusCode).json({ statusCode, message });
  next();
};
