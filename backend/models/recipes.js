// Importamos las funciones 'Schema' y 'model' de la biblioteca 'mongoose'
import { Schema, model } from "mongoose";

const recipesSchema =  Schema({
  title:{
    type: String,
    required: true
  },
  description:{
    type:String,
    required:true
  },
  ingredients:{
    type:String,
    required:true
  },
  instructions:{
    type:String,
    required:true
  },
  image:{
    type:String,
    required:true
  },
  author:{
    type: Schema.ObjectId,
    required:true
  },
  reviews:{
    type:String,
    required:true
  },
  created_at:{
    type: Date,
    default: Date.now
  }
})