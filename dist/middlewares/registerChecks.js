import { check } from "express-validator";
const RegisterChecks = [
    check("name")
        .notEmpty()
        .withMessage("name cannot be empty")
        .isString()
        .withMessage("name cannot have numbers")
        .custom((value) => {
        if (/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
            throw new Error("name cannot have special characters");
        }
        return true;
    }),
    check("lastname")
        .notEmpty()
        .withMessage("lastname cannot be empty")
        .isString()
        .withMessage("lastname cannot have numbers")
        .custom((value) => {
        if (/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
            throw new Error("lastname cannot have special characters");
        }
        return true;
    }),
    check("email")
        .notEmpty()
        .withMessage("email cannot be empty")
        .isEmail()
        .withMessage("email must have a @"),
];
export default RegisterChecks;
