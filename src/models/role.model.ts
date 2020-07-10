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
import { User } from './user.model'
import { RoleRouter } from './roleRouter.model'
import { Router } from './router.model'

@Table({
  tableName: 'roles',
  underscored: true,
})
class Role extends Model<Role> {
  @AllowNull(false)
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number

  @Column
  name: string

  @Column({
    type: DataType.JSON,
  })
  metaData: Record<string, any>

  @CreatedAt
  createdAt: Date

  @UpdatedAt
  updatedAt: Date

  @HasMany(() => User)
  users: User[]

  @BelongsToMany(() => Router, () => RoleRouter)
  routers: Router[]
}
export { Role }
