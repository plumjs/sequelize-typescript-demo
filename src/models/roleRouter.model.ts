import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
  AutoIncrement,
  AllowNull,
} from 'sequelize-typescript'
import { Role } from './role.model'
import { Router } from './router.model'

@Table({
  tableName: 'role_router',
  underscored: true,
})
class RoleRouter extends Model<RoleRouter> {
  @AllowNull(false)
  @PrimaryKey
  @AutoIncrement
  @Column
  id: string

  @ForeignKey(() => Role)
  @Column
  roleId: number

  @ForeignKey(() => Router)
  @Column
  routerId: number

  @CreatedAt
  createdAt: Date

  @UpdatedAt
  updatedAt: Date
}

export { RoleRouter }
