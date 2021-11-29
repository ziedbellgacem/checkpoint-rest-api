const mongoose = require("mongoose");
const schema = mongoose.Schema;
const userSchema = new schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
});
module.exports = mongoose.model("User", userSchema);
