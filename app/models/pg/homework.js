module.exports = (sequelize, DataTypes) => {
  const homework = sequelize.define('Homework', {
    id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV1 },
    roomId: DataTypes.STRING,
    creator: DataTypes.STRING,
    name: DataTypes.STRING,
    expiredTime: DataTypes.TIME,
    leaveMessage: DataTypes.STRING,
    createdTime: DataTypes.TIME,
    type: DataTypes.INTEGER,
    courseName: DataTypes.STRING,
    mode: DataTypes.INTEGER,
    isNew: DataTypes.BOOLEAN,
    topics: DataTypes.VIRTUAL,
    problems: DataTypes.VIRTUAL
  }, {
    freezeTableName: true,
    tableName: 'homework',
    timestamps: false
  })
  return homework
}
