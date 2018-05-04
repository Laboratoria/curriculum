function areValidCredentials(name, password) {
  return (name.length > 3 && password.length >= 8);
}

module.exports = areValidCredentials;
