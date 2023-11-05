import { validationResult } from "express-validator";
const ValidateChecks = (req, res, next) => {
    const error = validationResult(req);
    error.isEmpty() ? next() : res.status(400).json(error);
};
export default ValidateChecks;
