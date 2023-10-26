import mongoose from "mongoose";
const { Schema, model } = mongoose;
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
    default: "No description provided",
  },
  image: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
});

productsSchema.plugin(mongoosePaginate);

const Products = model("Products", productsSchema);

export default Products;
