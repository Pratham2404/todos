import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    id: {
        type: Number,
        required:true,
        unique:true
    },
    title : {
        type:String,
        required : true
    },
    content :{
        type: String,
        required: true
    },
    currStatus:{
        type:String,
        default: "not completed"
    },
    startDate : {
        type: Date,
        default : null 
    },
    endDate : {
        type: Date,
        default : null
    }


},{timestamps:true})

export const Todo = mongoose.model("Todo",todoSchema)