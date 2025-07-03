import "../styles/Header.scss";
import { Link } from "react-router-dom";
import Sun from "../assets/sun.svg";
import Moon from "../assets/moon.svg";
import { useEffect, useState } from "react";

function Header() {
  const [temaEscuro, setTemaEscuro] = useState(() => {
    return localStorage.getItem("tema") === "escuro";
  });

  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle("dark-theme", temaEscuro);
    localStorage.setItem("tema", temaEscuro ? "escuro" : "claro");
  }, [temaEscuro]);

  const imagem = temaEscuro ? Moon : Sun;
  const alt = temaEscuro ? "ativar tema escuro" : "ativar tema claro";
  const classeTema = temaEscuro ? "claro" : "";

  return (
    <div className={`header ${classeTema}`}>
      <div className="container">
        <div className="header-content">
          <div className="lado-esquerdo">
            <Link to="/">
              <p>TeoriaFacil</p>
            </Link>
          </div>
          <div className="lado-direito">
            <Link to="/">
              <p>Area Principal</p>
            </Link>
          </div>
          <div className="lado-direito-tema">
            <img
              onClick={() => setTemaEscuro((prev) => !prev)}
              draggable="false"
              src={imagem}
              alt={alt}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
