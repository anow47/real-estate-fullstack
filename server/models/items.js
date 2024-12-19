import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    title: String,
    img: Array,
    images: Array,
    region: String,
    lat: String,
    lng: String,
    description: String,
    detailsUrl: String,
    conatctUrl: String,
});

const itemModel = mongoose.model('Real-Estate', itemSchema);

export default itemModel;