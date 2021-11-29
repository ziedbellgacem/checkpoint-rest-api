const User = require("../models/User");

exports.addUser = async (req, res) => {
  const { username, email, age } = req.body;
  try {
    const user = new User({
      username,
      email,
      age,
    });
    await user.save(user);
    res.send({ user });
  } catch (error) {
    console.log("not posted err");
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send({ users });
  } catch (error) {
    res.status(500).send("server err");
  }
};

exports.deleteUser = async (req, res) => {
  const { userId } = req.params;
  try {
    await User.findByIdAndDelete(userId);
    res.send("user deleted");
  } catch (error) {
    res.status(500).send("server err");
  }
};
exports.updateUser = async (req, res) => {
  const { userId } = req.params;
  //   const { username, password } = req.body;
  try {
    await User.findByIdAndUpdate(userId, { $set: { ...req.body } });
    res.send("user update");
  } catch (error) {
    res.send("server err");
  }
};

exports.findOneUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    res.send(user);
  } catch (error) {
    res.send("server err");
  }
};
