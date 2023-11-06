import { check } from "express-validator";

const PostProductsCheck = [
  check("price")
    .isNumeric()
    .withMessage("The price has to be a number")
    .notEmpty()
    .withMessage("Price cannot be empty"),
  check("stock").isNumeric().withMessage("The stock must be a number"),
];

export default PostProductsCheck;
