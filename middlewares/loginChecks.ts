import { check } from "express-validator";

const LoginChecks = [
  check("email")
    .notEmpty()
    .withMessage("email cannot be empty")
    .isEmail()
    .withMessage("email must have a @"),
];

export default LoginChecks;
