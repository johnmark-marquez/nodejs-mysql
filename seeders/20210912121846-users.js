'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Users', [{
      first_name: 'Bruno',
      last_name: 'Doe',
      address: 'address 1',
      postcode: '1423',
      email: 'bruno@doe.com',
      phone: '09178529940',
      username: 'bruno_doe',
      password: '123456789',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'Emre',
      last_name: 'Smith',
      email: 'emre@smith.com',
      address: 'address 2',
      postcode: '1423',
      email: 'emre@smith.com',
      phone: '09178529940',
      username: 'emre_smith',
      password: '123456789',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'John',
      last_name: 'Stone',
      address: 'address 3',
      postcode: '1423',
      email: 'john@stone.com',
      phone: '09178529940',
      username: 'john_stone',
      password: '123456789',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /*** Add commands to revert seed here. **/
     return await queryInterface.bulkDelete('Users', null, {});
  }
};
