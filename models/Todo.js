import { Schema, model } from "mongoose";

//creating Schema

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  checked: {
    type: Boolean,
    default: false,
  },
});

const list = model("Todo", todoSchema);
export { list };
