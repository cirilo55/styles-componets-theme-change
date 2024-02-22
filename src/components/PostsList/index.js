import React from 'react';

import { Container } from './styles';
import Post from './Post';


export default function PostsList({ data , completePost, deletePost }) {
  return (
    <Container>
      <div className='stage'>
      {data ? data.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          completed={post.completed}
          description={post.description}
          completePost={completePost}
          deletePost={deletePost}
        />
      )): ''}
      </div>
    </Container>
  );
}