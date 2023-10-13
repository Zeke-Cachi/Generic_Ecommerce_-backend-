import mongoose from "mongoose";
const { Schema } = mongoose;
import mongoosePaginate from "mongoose-paginate-v2";
const userSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true,
    },
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
        default: "noemail@noemail.com",
    },
    password: {
        type: String,
        required: true,
    },
    cart: [
        {
            _id: Schema.Types.ObjectId,
            quantity: {
                type: Number,
                default: 0,
            },
            ref: "Products",
        },
    ],
});
userSchema.plugin(mongoosePaginate);
const Users = mongoose.model("user", userSchema);
export default Users;
