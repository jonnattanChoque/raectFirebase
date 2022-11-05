import React from 'react';
import {posts} from '../data/posts';
import { useParams, Navigate } from 'react-router-dom';

export const Post = () => {
    const { id } = useParams();
    const post = posts.find(post => post.id === Number(id));
    
    if(!post) return <Navigate replace to="/" />
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>
    )
}