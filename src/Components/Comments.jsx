import React from 'react'
import data from '../../data.json'
import UserReply from './UserReply'

const Comments = () => {

    const {comments} = data

  return (
    <main>
      {comments.map((comment) => {
        return(
            <>
                <div className="comment-box" key={comment.id}>
                    <div className="button-count">
                        <button className="btn">+</button>
                        <p>{comment.score}</p>
                        <button className="btn">-</button>
                    </div>
                    <div className="comment-content">
                        <div className="user-info">
                            <img src={comment.user.image.png} alt={comment.user.username} />
                            <p className="username">{comment.user.username}</p>
                            <p className="creation-date">{comment.createdAt}</p>
                        </div>
                        <button><img src="../../images/icon-reply.svg" alt="reply" /> Reply </button>
                    </div>
                </div>
                < UserReply comments={comment.replies}/>
            </>
            
        )
      })}
    </main>
  )
}

export default Comments
