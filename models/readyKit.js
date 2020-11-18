module.exports = function(sequelize, DataTypes) {
  var ReadyKit = sequelize.define("ReadyKit", {
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  });
  return ReadyKit;
};
