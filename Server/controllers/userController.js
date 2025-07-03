import bcrypt from "bcrypt";
import User from "../models/User.js";

// ✅ Criar usuário
export const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "Usuário criado com sucesso", user: newUser });
  } catch (err) {
    res.status(500).json({ erro: "Erro ao criar usuário" });
  }
};

// ✅ Listar usuários
export const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    res.status(500).json({ erro: "Erro ao buscar usuários" });
  }
};

// ✅ Login
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ erro: "Usuário não encontrado" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ erro: "Senha incorreta" });

    res.json({ message: "Login bem-sucedido", user: { email: user.email } });
  } catch (err) {
    res.status(500).json({ erro: "Erro ao fazer login" });
  }
};
