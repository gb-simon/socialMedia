const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const validateRegisterInput = require("../validation/register");

router.route("/register").get((req, res) => {
  const { isValid, errors } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(404).json(erros);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      errors.email = "Email was used!";
    }
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(req.body.password, salt, function (err, hash) {
        const newUser = new User({
          email: req.body.email,
          login: req.body.login,
          password: hash,
        });
        newUser
          .save()
          .then((newUser) => res.json(newUser))
          .catch((err) => console.log(err));
      });
    });
  });
});

module.exports = router;
