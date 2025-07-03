import "../styles/Gerador.scss";
import { useState } from "react";
import tonalidades from "../data/tonalidades.json";

function Gerador() {
  const [tonalidade, setTonalidade] = useState("");
  const [campo, setCampo] = useState("");
  const [message, setMessage] = useState("");
  const [modo, setModo] = useState("Maior");
  const [isBluesAviso, setIsBluesAviso] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tonalidade.length === 1) {
      const tom = modo;
      const letra = tonalidade.toUpperCase();
      const code = letra.charCodeAt(0);
      if (code >= "A".charCodeAt(0) && code <= "G".charCodeAt(0)) {
        console.log("Tonalidade enviada: ", tonalidade);
        setMessage(`Tonalidade enviada ${letra} ${modo}`);
        document.title = `Tonalidade de ${letra} ${modo}`;
        setCampo(tonalidades[tom][letra].join("/"));
        if (tom === "Escala Blues") {
          setIsBluesAviso(true);
          setMessage(
            `Aviso: o modo ${tom} não possui campo harmônico definido pois não é utilizado para harmonização tradicional. Isso é uma aproximação.`
          );
        } else {
          setIsBluesAviso(false);
        }
        return;
      }
    }
    setIsBluesAviso(false);
    console.log("tonalidade invalida. Digite uma nota de A à G (La à Sol)");
    setMessage(`tonalidade invalida. Digite uma nota de A à G (La à Sol)`);
    document.title = "Teoria Musical Facil";
    setCampo();
  };
  return (
    <div className="gerador">
      <div className="gerador-content">
        <h2>Digite sua Tonalidade</h2>
        <form onSubmit={handleSubmit}>
          <div className="box">
            <input
              type="text"
              placeholder="C/D/E..."
              value={tonalidade}
              onChange={(e) => setTonalidade(e.target.value)}
            />
            <select value={modo} onChange={(e) => setModo(e.target.value)}>
              <option value="Maior">Maior</option>
              <option value="Menor">Menor</option>
              <option value="Pentatonica Maior">Pentatonica Maior</option>
              <option value="Pentatonica Menor">Pentatonica Menor</option>
              <option value="Escala Blues">Blues</option>
            </select>
          </div>
          <button type="submit">Enviar</button>
        </form>
        <div className="resultado">
          {message && (
            <p className={isBluesAviso ? "aviso-blues" : ""}>{message}</p>
          )}
          {campo && <div className="campo">{campo}</div>}
        </div>
      </div>
      <div className="gerador-about">
        <p>
          Utilizando o gerador ao lado você receberá uma lista mostrando o campo
          harmônico da nota e modo que você escolher.
          <br />
          as tonalidades são de A até G (Lá até Sol)
        </p>
        <br />
        <p>
          Logo ao lado do espaço pra você escrever a tonalidade tambem tem a
          opção pra você escolher o modo
          <br />
          Maior ou Menor.
        </p>
      </div>
    </div>
  );
}
export default Gerador;
