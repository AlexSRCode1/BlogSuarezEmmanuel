import React from "react";
import { useParams } from "react-router-dom";
import Posts from "../../Data/Posts";

export default function PostDetalle() {
  const { id } = useParams();
  const post = Posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div style={{ textAlign: "center" }}>Post no encontrado 😢</div>;
  }

  return (
    <article
      style={{
        maxWidth: "800px",
        margin: "20px auto",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        color: "#ffb17a",
        backgroundColor: "#121212",
        padding: "2rem",
        borderRadius: "12px",
        boxShadow: "0 0 10px rgba(255,103,0,0.2)",
      }}
    >
      <h2 style={{ color: "#ff6700" }}>{post.title}</h2>
      <img
        src={post.image}
        alt={post.title}
        style={{
          width: "100%",
          borderRadius: "8px",
          marginBottom: "15px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      />
      <div style={{ fontSize: "1.1rem" }}>
        {post.body ? post.body : <p style={{ whiteSpace: "pre-line" }}>{post.content}</p>}
      </div>
    </article>
  );
}
