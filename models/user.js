import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Имя обязательно к заполнению"],
    trim: true,
  },

  lastName: {
    type: String,
    required: [true, "Фамилия обязательна к заполнению"],
    trim: true,
  },

  age: {
    type: Number,
    required: [true, "Возраст обязателен к заполнению"],
    min: 12,
  },
});

export default mongoose.model("User", userSchema);
