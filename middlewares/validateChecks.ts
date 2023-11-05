import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

const ValidateChecks = (req: Request, res: Response, next: NextFunction) => {
  const error = validationResult(req);
  error.isEmpty() ? next() : res.status(400).json(error);
};

export default ValidateChecks;
