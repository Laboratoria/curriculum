const loadUsers = (userIds, load, done) => {
  let completed = 0;
  const users = [];
  userIds.forEach((id, index) => {
    load(id, user => {
      users[index] = user;
      if (++completed === userIds.length) {
        return done(users);
      }
    });
  });
};

export default loadUsers;
