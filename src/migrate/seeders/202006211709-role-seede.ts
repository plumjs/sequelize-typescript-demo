import { QueryInterface } from 'sequelize'

async function up(queryInterface: QueryInterface) {
  await queryInterface.bulkInsert('roles', [
    {
      id: 1,
      name: 'admin',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      name: 'developer',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ])
}

async function down(queryInterface: QueryInterface) {
  await queryInterface.bulkDelete('roles', null, {})
}

export default { up, down }
