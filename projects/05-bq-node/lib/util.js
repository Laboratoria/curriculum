const qs = require('querystring');


exports.createPrivatePropsFilter = keys => (doc) => {
  const json = doc.toJSON();
  const privateKeys = ['__v'].concat(keys || []);
  return Object.keys(json).reduce((memo, key) => {
    if (privateKeys.indexOf(key) !== -1) {
      return memo;
    }
    return { ...memo, [key]: json[key] };
  }, {});
};


exports.getPaginationParamsFromRequest = req => [
  'page',
  'limit',
].reduce((memo, key) => (
  (!req.query[key])
    ? memo
    : { ...memo, [key]: parseInt(req.query[key], 10) }
), { page: 1, limit: 10 });


exports.buildLinkHeader = (req, results) => {
  const absUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
  const endpointUrl = absUrl.split('?')[0];

  const buildLink = (key, page) => (
    `<${endpointUrl}?${qs.stringify({ ...req.query, page })}>; rel="${key}"`
  );

  return ['first', 'last', 'prev', 'next']
    .reduce((memo, key) => {
      if (key === 'first' && results.page > 1) {
        return [...memo, buildLink(key, 1)];
      }
      if (key === 'last' && results.page < results.pages) {
        return [...memo, buildLink(key, results.pages)];
      }
      if (key === 'prev' && results.page > 1) {
        return [...memo, buildLink(key, results.page - 1)];
      }
      if (key === 'next' && results.page < results.pages) {
        return [...memo, buildLink(key, results.page + 1)];
      }
      return memo;
    }, [])
    .join(', ');
};
