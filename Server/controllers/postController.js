import Post from "../models/Post.js";

export const createPost = async (req, res) => {
  try {
    const { titulo, corpoBlog } = req.body;
    const newPost = new Post({ titulo, corpoBlog });
    await newPost.save();
    res.status(201).json({ message: "Postagem criada com sucesso", post: newPost });
  } catch (err) {
    res.status(500).json({ erro: "Erro ao criar postagem" });
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ erro: "Erro ao buscar postagens" });
  }
};