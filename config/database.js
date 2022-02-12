const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect('mongodb://localhost:27017/UserAuth', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.warn("Database connected");
    })
}

module.exports = connectDatabase