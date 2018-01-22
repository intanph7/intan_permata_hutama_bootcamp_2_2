const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/customer", { useMongoClient : true });

const Schema = mongoose.Schema;

const customerSchema = new Schema({

    name : String,
    address : String,
    phoneNumber : String,
});

const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;