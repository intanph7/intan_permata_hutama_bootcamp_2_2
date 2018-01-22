const express = require("express");
const bodyParser = require("body-parser")
const customerRoutes = require("./route/customer");
const rumahRoutes = require("./route/rumah");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.use("/api/customer", customerRoutes);
app.use("/api/rumah", rumahRoutes);

app.listen(3000);