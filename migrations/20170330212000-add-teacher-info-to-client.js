'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.addColumn(
        'Clients',
        'teacher',
        {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    );
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.removeColumn('Clients','teacher');
  }
};