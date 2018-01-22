const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/rumah", { useMongoClient: true });

const Schema = mongoose.Schema;

const rumahSchema = new Schema({

    address: String,
    price: Number,
    availability: String

});

const Rumah = mongoose.model("rumah", rumahSchema);

module.exports = Rumah;