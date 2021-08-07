const mongoose = require("mongoose");

const connectToDB = async () =>
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });

// mongoose.connection.on("connected", () => {
//     console.log("Mongoose is connected");
// });

module.exports = connectToDB;
