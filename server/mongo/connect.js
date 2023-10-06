const mongoose = require("mongoose");
const string = process.env.URI_STRING || "mongodb+srv://";
mongoose.connect(string);
