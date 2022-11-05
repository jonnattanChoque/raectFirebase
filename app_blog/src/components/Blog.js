import React from 'react';
import {posts} from '../data/posts';
import {NavLink} from 'react-router-dom';

export const Blog = () => {
  return (
    <div>
        <h2>Blog</h2>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <NavLink to={`/post/${post.id}`}>{post.title}</NavLink>
            </li>
          ))}
        </ul>
    </div>
  )
}

