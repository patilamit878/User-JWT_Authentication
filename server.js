const app = require('./app');

const connectDatabase = require('./config/database');

//connecting to database
connectDatabase();

app.listen(5000, ()=>{
    console.log("Server started on port 5000");
})