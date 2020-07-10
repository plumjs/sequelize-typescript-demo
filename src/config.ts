import { SequelizeOptions } from 'sequelize-typescript'

interface IConfig {
  dbOptions: SequelizeOptions
}

const config: IConfig = {
  dbOptions: {
    database: 'sequelize-demo',
    username: 'admin',
    password: 'password',
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: true,
    port: 3307,
  },
}

export { config }
