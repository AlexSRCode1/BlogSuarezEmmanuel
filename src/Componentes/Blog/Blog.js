import React from 'react';
import Posts from '../../Data/Posts';
import { PostCard } from './PostCard';

export default function Blog() {
  return (
    <div>
      <h1 className="mb-4 text-center" style={{ color: '#ff6700', textShadow: '0 0 10px #ff6700' }}>
        Blog de Videojuegos
      </h1>
      {Posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
