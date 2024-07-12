import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: String,
    type: String,
    price: Number,
    rating: Number,
    warranty_years: Number,
    available: Boolean
});

export default mongoose.model('Product', productSchema);
