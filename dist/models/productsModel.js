import mongoose from "mongoose";
const { Schema, model } = mongoose;
import paginate from "mongoose-paginate-v2";
export const productsSchema = new Schema({
    userId: Schema.Types.ObjectId,
    title: {
        type: String,
        required: true,
        default: "Product",
    },
    price: {
        type: Number,
        required: true,
        default: 0,
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
        default: 1,
    },
    quantity: {
        type: Number,
        required: true,
        default: 0,
    },
});
productsSchema.index({ title: "text" }, { name: "productSearchIndex" });
productsSchema.plugin(paginate);
const Products = model("Products", productsSchema);
export default Products;
