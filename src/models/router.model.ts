import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  HasMany,
  PrimaryKey,
  AutoIncrement,
  DataType,
  AllowNull,
  BelongsToMany,
} from 'sequelize-typescript'
import { Role } from './role.model'
import { RoleRouter } from './roleRouter.model'

@Table({
  tableName: 'routers',
  underscored: true,
})
class Router extends Model<Router> {
  @AllowNull(false)
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number

  @Column
  name: string

  @Column
  path: string

  @CreatedAt
  createdAt: Date

  @UpdatedAt
  updatedAt: Date

  @BelongsToMany(() => Role, () => RoleRouter)
  roles: Role[]
}
export { Router }
