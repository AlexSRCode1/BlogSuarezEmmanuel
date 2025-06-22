import React from 'react';

export function PostCard({ post }) {
  return (
    <div className="card mb-4 shadow" style={{ borderColor: '#ff6700' }}>
      <img
        src={post.image}
        className="card-img-top"
        alt={post.title}
        style={{ maxHeight: '250px', objectFit: 'cover' }}
      />
      <div className="card-body" style={{ backgroundColor: '#121212', color: '#ff6700' }}>
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text" style={{ color: '#ffb17a' }}>{post.content}</p>
      </div>
    </div>
  );
}
