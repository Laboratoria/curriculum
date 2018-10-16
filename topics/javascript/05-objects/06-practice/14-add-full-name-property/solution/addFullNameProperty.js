const addFullNameProperty = obj => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});

module.exports = addFullNameProperty;
