const express = require("express");
const router = express.Router();
const {
  addUser,
  getAllUsers,
  deleteUser,
  updateUser,
  findOneUser,
} = require("../controlles/user");

//path:api/users/test
router.get("/test", (req, res) => {
  res.send("test is true");
});

//method Post
//url /
// req.body

router.post("/", addUser);

//method get
// url /

router.get("/", getAllUsers);

//method delete
//url /:userId
// req.params

router.delete("/:userId", deleteUser);

// method put
// req.body
// req.params
// url /:userId

router.put("/:userId", updateUser);

// method get
//url /:userId
// req.params

router.get("/:userId", findOneUser);

module.exports = router;
