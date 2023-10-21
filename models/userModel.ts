import mongoose from "mongoose";
const { Schema, model } = mongoose;
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
});

userSchema.plugin(mongoosePaginate);

const Users = model("Users", userSchema);

export default Users;
