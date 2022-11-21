const Model = require("../models");

exports.addUser = (data) => { 
  return Model.userModel.create(data);
};

exports.getuser = (data) => {
  return Model.userModel.findAll();
};

Model.userModel.hasMany(Model.gameModel, {
  foreignKey: "userID",
});

Model.gameModel.hasMany(Model.groundModel,{foreignKey:"gameID"})
Model.groundModel.hasMany(Model.locationModel,{foreignKey:"groundID"})


exports.getuserall = (data) => { 
  return Model.userModel.findAll({
    include: [
      {
        model: Model.gameModel,
        include: [
          {
            model: Model.groundModel,
            include: [{ model: Model.locationModel }],
          },
        ],
      },
    ],
  });
};
