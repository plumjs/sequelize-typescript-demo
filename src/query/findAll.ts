import { Role, User, Router, RoleRouter } from '../models'
;(async () => {
  const roles = await Router.findAll({
    include: [
      {
        model: Role,
      },
    ],
  })
  console.log('roles:', roles[0].roles)
})()
