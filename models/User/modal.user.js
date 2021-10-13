module.exports = (sequelize, DataTypes) => {
const User = sequelize.define("User", {
     _id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      description: DataTypes.TEXT
    });

    // sequelize.sync({
    //     logging:console.log,
    //     force: true
    // })
}
// module.exports = User