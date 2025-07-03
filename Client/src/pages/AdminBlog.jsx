import Header from "../components/HeaderAdmin.jsx";
import Footer from "../components/Footer.jsx";
import AdminBox from "../components/AdminBox.jsx";
import "../styles/App.scss";

function AdminBlog() {
  return (
    <>
      <Header />
      <main>
        <div className="titlearea">
          <div className="container">
            <h1>Post Area</h1>
            <p>Poste seus blogs por aqui!</p>
          </div>
        </div>
        <hr />
        <section id="blog" className="blog">
          <div className="blog-box">
            <AdminBox />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default AdminBlog;
