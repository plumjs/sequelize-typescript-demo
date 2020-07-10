import { Sequelize } from 'sequelize-typescript'
// import { config } from './config'

let sequelize: Sequelize = null
;(async () => {
  sequelize = new Sequelize({
    database: 'sequelize-demo',
    username: 'admin',
    password: 'password',
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: console.log,
    port: 3307,
  })
  await sequelize.authenticate()
})()
export { sequelize }
