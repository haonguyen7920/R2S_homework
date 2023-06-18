const users = [
  { id: 1, admin: false },

  { id: 2, admin: false },

  { id: 3, admin: true },
];

const displayAdmin = (users) => {
  for (let item of users) {
    if (item.admin === true) {
      console.log(item.id);
    }
  }
};

displayAdmin(users);
