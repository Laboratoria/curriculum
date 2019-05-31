function addFullNameProperty(obj) {
  return (obj.fullName = obj.firstName + ' ' + obj.lastName);
};

module.exports = addFullNameProperty;
