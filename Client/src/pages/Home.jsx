import "../styles/App.scss";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Gerador from "../components/Gerador.jsx";

function App() {
  return (
    <div>
      <Header />

      <div className="bg-fix"></div>
      <div className="block"></div>
      <main>
        <section id="home">
          <div className="container">
            <div className="home-content">
              <div className="texto1">
                <h2>
                  <span>TeoriaFacil</span> veio para facilitar a pesquisa por
                  campos harmônicos para músicos iniciantes
                </h2>
                <p>
                  nem todos os músicos no início conhecem campos harmônicos, e
                  isso é normal.
                  <br />
                  Para isso veio o <span>TeoriaFacil</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="gerador">
          <div className="container">
            <Gerador />
          </div>
        </section>
        <section id="about">
          <div className="container">
            <div className="about-content">
              <h1>About</h1>
              <p>
                Este gerador foi criado para te ajudar a visualizar rapidamente
                o campo harmônico de qualquer tonalidade entre A e G (Lá até
                Sol). Basta digitar a nota desejada e escolher o modo — maior ou
                menor — para receber a sequência de acordes correspondentes. É
                uma forma prática e direta de entender como os acordes se
                organizam dentro de uma tonalidade, ideal para quem está
                estudando teoria musical ou compondo suas próprias músicas.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
