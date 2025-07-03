import { useState } from "react";
import "../styles/adminBox.scss";
import Confirmation from "./Confirmation.jsx";

function AdminBox() {
  const [titulo, setTitulo] = useState("");
  const [corpoBlog, setCorpoBlog] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setMostrarConfirmacao(true);
  }

  async function enviarPost() {
    try {
      const response = await fetch("http://localhost:8081/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          titulo,
          corpoBlog,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMensagem("post criado com sucesso!");
      } else {
        setMensagem("Erro ao criar o post: " + data.erro);
      }
    } catch (error) {
      setMensagem("Erro ao conectar com o servidor");
    } finally {
      setMostrarConfirmacao(false); // fecha o modal após ação
    }
  }

  return (
    <>
      <div className="container">
        <form id="blogarea" onSubmit={handleSubmit}>
          <label htmlFor="blogtitle">Digite o titulo da sua postagem</label>
          <input
            id="blogtitle"
            name="blogtitle"
            type="text"
            placeholder="Digite o titulo da sua postagem"
            onChange={(e) => setTitulo(e.target.value)}
          />
          <label htmlFor="blogtext">Corpo da Publicação</label>
          <textarea
            id="blogtext"
            name="blogtext"
            rows="8"
            cols="50"
            onChange={(e) => setCorpoBlog(e.target.value)}
          ></textarea>
          <label htmlFor="blogimg">Anexos</label>
          <input
            id="blogimg"
            name="blogimg"
            type="file"
            placeholder="imagem caso necessario"
          />
          <button type="submit">Enviar</button>
        </form>
        {mensagem && <p>{mensagem}</p>}
      </div>
      {mostrarConfirmacao && (
        <Confirmation
          onConfirmar={enviarPost}
          onCancelar={() => setMostrarConfirmacao(false)}
        />
      )}
    </>
  );
}

export default AdminBox;
