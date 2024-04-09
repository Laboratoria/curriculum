const addFullNameProperty = obj => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});

export default addFullNameProperty;
