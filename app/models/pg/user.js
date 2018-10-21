module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV1 },
    username: { type: DataTypes.STRING(100), allowNull: false, unique: true, comment: '用户名' },
    password: { type: DataTypes.INTEGER, allowNull: false, comment: '密码' },
    salt: { type: DataTypes.STRING(50), allowNull: false, comment: '盐值' },
    avatar: { type: DataTypes.STRING(100), allowNull: true, comment: '默认头像' }
  }, {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'createdTime',
    updatedAt: 'updatedTime',
    tableName: 'user',
    comment: '用户表'
  })
  User.associate = function (models) { // eslint-disable-line
  }
  return User
}