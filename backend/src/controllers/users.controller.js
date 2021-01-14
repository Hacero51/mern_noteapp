const usersCtrl = {};
const User = require('../models/User');

usersCtrl.getUsers = async(req,res)=>{
    const users = await User.find();
    res.json(users);
};

usersCtrl.createUsers = async(req,res)=>{
    const { username } = req.body;
    const newUser = new User({
        username
        });
    await newUser.save();    
    res.json('New User Save');
};
usersCtrl.deleteUsers = async(req,res)=>{
    await User.findOneAndDelete(req.params.id);
    res.json('Delete User');
};
module.exports = usersCtrl;