import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://iraboldyrieva:fJgJ8bIX2tajkGh8@cluster0.olsdc.mongodb.net/food-del"
    )
    .then(() => {
      console.log("DB connected");
    });
};
