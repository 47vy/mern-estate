import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true, // This will throw an error if the username is missing
        unique: true, // This will throw an error if the username already exists
    },
    email: {
        type: String,
        required: true, // This will throw an error if the email is missing
        unique: true, // This will throw an error if the email already exists
    },
    passWord: {
        type: String,
        required: true, // This will throw an error if the username is missing
    },
}, { timestamps: true }); // This will add a createdAt and updatedAt field to the schema

const User = mongoose.model("User", userSchema);

export default User;