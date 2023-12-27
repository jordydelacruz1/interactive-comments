import '../index.css'
import { useState } from 'react'
import Modal from './Modal'

const UserReply = ( {replies, handleScore, checkScore, repliesScore, setModal, modal} ) => {

  

  return (
    <>

      {replies.map((reply, index) => {
        return (
          <div className="comment-box reply-box" key={reply.id}>
            <div className="button-count">
                <button className="btn score" onClick={() => {handleScore(index, 1)}}><img src="../../images/icon-plus.svg"/></button>
                <p>{repliesScore[index]}</p>
                <button className="btn score" onClick={() => {handleScore(index, -1)}}><img src="../../images/icon-minus.svg"/></button>
            </div>
            <div className="container">
              <div className="comment-content">
                <div className="user-info">
                  <img src={reply.user.image.png} alt={reply.user.username} className="user-profile"/>
                  <p className="username">{reply.user.username}</p>
                  { reply.id == 4 && <p className="you">you</p>}
                  <p className="creation-date">{reply.createdAt}</p>
                </div>
                { reply.id == 4 ? <><button className="reply btn delete" onClick={() => setModal(!modal)}><img src="../../images/icon-delete.svg" /> Delete </button><button className="reply btn edit"><img src="../../images/icon-edit.svg" /> Edit </button></> : <button className="reply btn"><img src="../../images/icon-reply.svg" alt="reply" /> Reply </button>}
              </div>
              <p className="user-content"><span className="replying-to">@{reply.replyingTo}</span> {reply.content}</p>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default UserReply
