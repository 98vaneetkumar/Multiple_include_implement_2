const Service = require("../service");


module.exports = {
  Add: async (data) => {
    let userdata = {
      userId:data.userId,
      name: data.name,
      email:data.email,
    
    };
    let user = await Service.userService.addUser(userdata);
    if (user) {
      return {
        status: "Success",
        message: "Add user successfull",
        user: user,
      };
    } else {
      return {
        status: "unSuccess",
        message: " unable to Add user ",
        user: user,
      };
    }
  },
  get: async (data) => {
    const user = await Service.userService.getuser();
    console.log(user)
    if (user) {
      return {
        status: "Success",
        user: user,
      };
    }
  },
 getallrecordofalltable:async(data)=>{
  const user = await Service.userService.getuserall();
  if (user) {
    return {
      status: "Success",
      user: user,
    };
  }
 }
};
