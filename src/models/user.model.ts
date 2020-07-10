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

@Table({
  tableName: 'users',
  underscored: true,
})
class User extends Model<User> {
  @AllowNull(false)
  @PrimaryKey
  @AutoIncrement
  @Column
  id: string

  @Column
  name: string

  @ForeignKey(() => Role)
  @Column
  roleId: number

  @CreatedAt
  createdAt: Date

  @UpdatedAt
  updatedAt: Date

  @BelongsTo(() => Role)
  role: Role
}

export { User }
