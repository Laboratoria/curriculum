const loadUsers = (userIds, load, done) => {
  var users = [];
  for (var i = 0; i < userIds.length; i++) {
    users.push(load(userIds[i]));
  }
  return users;
}

export default loadUsers;
