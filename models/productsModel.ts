import mongoose from "mongoose";
const { Schema } = mongoose;
import mongoosePaginate from "mongoose-paginate-v2";

const productsSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: {
    type: String,
    required: true,
    default: "Product",
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: false,
    default: "No description provided",
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  rating: {
    rate: Number,
    required: false,
    default: -1,
  },
  stock: {
    type: Number,
    required: true,
  },
});

productsSchema.plugin(mongoosePaginate);

const Users = mongoose.model("product", productsSchema);

export default Users;
