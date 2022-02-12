const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Your Name"],
    },
    email:{
        type:String,
        required:[true,"please Enter Your Email"],
        unique:true,
        validate:[validator.isEmail,"Please Enter valid Email"],
    },
    password:{
        type:String,
        required:[true,"Please Enter Your Password"],
        minlength:[8,"Password should be greater than 8 character"],
        select:false,
    },
    avatar:{
        public_id:{
            type:String,
            required:true,
        },
        url:{
            type:String,
            required:true,
        },
    },
    role:{
        type:String,
        default:"user",
    },
    
    resetPasswordToken: String,
    resetPasswordExpire: Date,
});

module.exports = mongoose.model("User", userSchema);