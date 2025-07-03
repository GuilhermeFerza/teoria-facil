import "../styles/Header.scss";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Sun from "../assets/sun.svg";
import Moon from "../assets/moon.svg";
import { useEffect, useState } from "react";

function Header() {
  const [scrollando, setScrollando] = useState(false);
  useEffect(() => {
    let timeoutId = null;
    function handleScroll() {
      if (timeoutId === null) {
        timeoutId = setTimeout(() => {
          const estaScrollando = window.scrollY > 0;
          setScrollando((prev) => {
            if (prev !== estaScrollando) return estaScrollando;
            return prev;
          });
          timeoutId = null;
        }, 100);
      }
    }

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <div className={`header ${scrollando ? "scrollando" : ""} ${classeTema}`}>
      <div className="container">
        <div className="header-content">
          <div className="lado-esquerdo">
            <Link to="/">
              <p>TeoriaFacil</p>
            </Link>
          </div>
          <div className="lado-direito">
            <HashLink smooth to="#home">
              <p>Home</p>
            </HashLink>
            <HashLink smooth to="#gerador">
              <p>Gerador</p>
            </HashLink>
            <HashLink smooth to="#about">
              <p>Sobre</p>
            </HashLink>
            <Link to="/blog">
              <p>Blog</p>
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
