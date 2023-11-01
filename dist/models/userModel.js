import mongoose, { Schema } from "mongoose";
const { model } = mongoose;
import mongoosePaginate from "mongoose-paginate-v2";
import { productsSchema } from "./productsModel.js";
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    profileImg: {
        type: String,
    },
    cart: [productsSchema],
    uploadedProducts: [productsSchema],
});
userSchema.plugin(mongoosePaginate);
const Users = model("Users", userSchema);
export default Users;
