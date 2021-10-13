module.exports = (sequelize, DataTypes) => {
const User_post = sequelize.define("User_post", {
      _id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: DataTypes.STRING,
      description: DataTypes.TEXT
    });

    // sequelize.sync({
    //     logging:console.log,
    //     force: true
    // })
}
// module.exports = User_post