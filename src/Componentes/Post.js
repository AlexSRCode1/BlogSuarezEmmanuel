import React from "react";

function Post({ title, content, image }) {
  return (
    <article
      style={{
        maxWidth: "700px",
        margin: "20px auto",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        color: "#333",
      }}
    >
      <h2 style={{ color: "#d9480f" }}>{title}</h2>
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          borderRadius: "8px",
          marginBottom: "15px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      />
      <p style={{ whiteSpace: "pre-line", fontSize: "1.1rem" }}>{content}</p>
    </article>
  );
}

export default Post;
