import Header from "../components/HeaderGeral.jsx";
import Footer from "../components/Footer.jsx";
import "../styles/Admin-Login.scss";
import { useState } from "react";
import { useNavigate } from "react-router";

function Admin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8081/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login bem-sucedido!");
        console.log("Usuário logado:", data.user);
        localStorage.setItem("authToken", data.token);
        navigate("/admin/blog");
      } else {
        alert(data.erro);
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro de conexão com o servidor");
    }
  }

  return (
    <>
      <Header />
      <div className="everything">
        <main>
          <section>
            <div className="container">
              <div className="admin-content">
                <div className="admin-login-box">
                  <h1>Login</h1>
                  <form onSubmit={handleSubmit}>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      id="password"
                      name="password"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button>Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
        <aside></aside>
      </div>
      <Footer />
    </>
  );
}

export default Admin;
