import { sequelize } from '../sequelize'
import { Role } from './role.model'
import { User } from './user.model'
import { Router } from './router.model'
import { RoleRouter } from './roleRouter.model'

sequelize.addModels([Role, User, Router, RoleRouter])

export { Role, User, Router, RoleRouter }
