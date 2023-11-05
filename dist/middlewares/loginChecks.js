import { check } from "express-validator";
const LoginChecks = [
    check("email")
        .notEmpty()
        .withMessage("email cannot be empty")
        .isEmail()
        .withMessage("email must have a @"),
    check("password")
        .notEmpty()
        .withMessage("password cannot be empty")
        .isStrongPassword()
        .withMessage("password must have at least 8 characters, at least one uppercase letter, at least one digit and one special character"),
];
export default LoginChecks;
