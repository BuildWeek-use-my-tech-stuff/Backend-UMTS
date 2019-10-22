
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'jimbo', email: 'jimbo@test.com', phone: '111-111-1111', password: '123'},
        {username: 'alfred', email: 'alfred@test.com', phone: '222-111-1811', password: '321'},
        {username: 'jimi james', email: 'jimijames@test.com', phone: '123-111-2525', password: '231'}
      ]);
    });
};
