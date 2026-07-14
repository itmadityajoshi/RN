import React from 'react'
import { useState } from 'react';

const LikeButton = () => {
    const [like, setlike] = useState(0)

    function increase(){
        setlike(like => like+1);
    }
  return (
    <div>
        <h1> Likes : {like}  </h1>
        <button onClick={increase}>
            👍Like 
        </button>

    </div>
  )
}

export default LikeButton