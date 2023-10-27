import mongoose, { Schema } from "mongoose";
const { model } = mongoose;
import mongoosePaginate from "mongoose-paginate-v2";
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
    cart: [
        {
            product: {
                type: Schema.Types.ObjectId,
                ref: "Products",
            },
            quantity: {
                type: Number,
                default: 0,
            },
        },
    ],
    uploadedProducts: [{ _id: Schema.Types.ObjectId }],
});
userSchema.plugin(mongoosePaginate);
const Users = model("Users", userSchema);
export default Users;
