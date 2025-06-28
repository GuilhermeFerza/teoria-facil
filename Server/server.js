import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const API_URI = process.env.API_URI;

app.use(cors());
app.use(express.json());

// Conectar ao MongoDB
mongoose
  .connect(API_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.error("Erro na conexão:", err));

// Rotas
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
