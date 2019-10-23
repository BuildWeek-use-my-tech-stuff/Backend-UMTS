
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'james', email: 'james@test.com', phone: '111-111-1111', password: '123'},
        {username: 'bob', email: 'bob@test.com', phone: '222-111-1811', password: '321'},
        {username: 'al', email: 'al@test.com', phone: '123-111-2525', password: '231'}
      ]);
    });
};
