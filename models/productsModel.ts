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
  },
  stock: {
    type: Number,
    required: true,
  },
});

productsSchema.plugin(mongoosePaginate);

const Products = model("Products", productsSchema);

export default Products;
