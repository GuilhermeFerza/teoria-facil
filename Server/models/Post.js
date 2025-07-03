import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    titulo: String,
    corpoBlog: String,
    imagem: String,
  },
  { timestamps: true }
);

export default mongoose.model("Post", postSchema);