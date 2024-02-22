import React from 'react';

import { Container } from './styles';

export default function Post({ description, completePost, deletePost, id, completed}) {


  return (
    <Container>
      <div className='complete'>
      {completed ? <span className='dotblack'></span> :<span className="dot" onClick={() =>completePost(id)}></span>}
      </div>

      {completed ? <h2 className='completed'><s>{description}</s></h2> : <h2>{description}</h2>}

      <div className='delete' onClick={() => deletePost(id)}>❌</div>
    </Container>
  );
}