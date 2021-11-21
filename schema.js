//import mongoose from 'mongoose';
const mongoose = require("mongoose")
const { Schema } = mongoose;

const studentSchema = new Schema({
    studentName: String,
    regNo: String,
    marks: String
});

module.exports = mongoose.model("firstmongoose", studentSchema, "SL-Lab-11")