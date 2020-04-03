const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/covid19-chat", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongodb connected"))
  .catch((err) => console.log(err));
