import Header from "../components/HeaderGeral.jsx";
import Footer from "../components/Footer.jsx";
import { useEffect, useState } from "react";
import "../styles/Blog.scss";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/api/post")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("erro ao buscar posts: ", err));
  }, []);

  return (
    <>
      <Header />
      <main>
        <section id="blog-area" className="blog-area">
          <div className="container">
            <div className="blog-title">
              <h1>Blog</h1>
            </div>
            <div className="blog-content">
              {posts.map((post) => (
                <div className="blog-excerpt" key={post._id}>
                  <h2>{post.titulo}</h2>
                  <p>{post.corpoBlog}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Blog;
