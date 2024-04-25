const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    first_name: {
        type: String, 
        required: true
    },

    last_name: {
        type: String, 
        required: true
    },

    email: {
        type: String, 
        required: true,
        index: true, 
        unique: true
    }, 

    age: {
        type: Number,
        required: true
    },

    password: {
        type: String, 
        required: true
    },

    role: {
        type: String,
        enum:['admin', 'usuario'],
        required: true
    },
    
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cart'
    }
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;