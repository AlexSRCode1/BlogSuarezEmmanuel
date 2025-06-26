import React from "react";
import { Link } from "react-router-dom";

export function PostCard({ post }) {
  return (
    <div className="card mb-4 shadow" style={{ borderColor: '#ff6700' }}>
      <img
        src={post.image}
        alt={post.title}
        className="card-img-top"
        style={{ maxHeight: '250px', objectFit: 'cover' }}
      />
      <div className="card-body" style={{ backgroundColor: '#121212', color: '#ff6700' }}>
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text" style={{ color: '#ffb17a' }}>{post.content}</p>
        <Link to={`/blog/${post.id}`} className="btn btn-outline-warning">
          Leer más
        </Link>
      </div>
    </div>
  );
}
