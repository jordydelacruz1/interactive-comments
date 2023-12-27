import { useState } from 'react'
import data from '../../data.json'
import UserReply from './UserReply'
import CurrentUser from './CurrentUser'
import Modal from './Modal'
import '../index.css'

const Comments = () => {
  const {comments} = data

  const [score, setScore] = useState(comments.map((comment) => comment.score))
  const [repliesScore, setRepliesScore] = useState(comments.flatMap((comment) => comment.replies.map((reply) =>
  reply.score)))
  const [commentModal, setCommentModal] = useState(false)
  

  // const [replies, setReplies] = useState([])

  const handleScore = (id, value) => {

    setScore((prevScore) => {

    let newId = id - 1
    const newScores = [...prevScore]
    newScores[newId] += value
    // checkScore(newScores[newId])
    return newScores.map(checkScore)

   })

   setRepliesScore((prevRepliesScore) => {

    const newReplyScores = [...prevRepliesScore]
    newReplyScores[id] += value
    // checkScore(newReplyScores[id])
    return newReplyScores.map(checkScore)

   })
  }

  const checkScore = (num) => {
    if (num < 0) {
      return 0
    }
    return num
  }

  const reply = () => {

  }

  return (
    <main>
      {comments.map((comment, index) => {
        return(
            <>
                <div className="comment-box" key={comment.id}>
                    <div className="button-count">
                        <button className="btn score" onClick={() => {handleScore(comment.id, 1)}}><img src="../../images/icon-plus.svg"/></button>
                        <p>{score[index]}</p>
                        <button className="btn score" onClick={() => {handleScore(comment.id, -1)}}><img src="../../images/icon-minus.svg"/></button>
                    </div>
                    <div className="container">
                      <div className="comment-content">
                          <div className="user-info">
                              <img src={comment.user.image.png} alt={comment.user.username} className="user-profile"/>
                              <p className="username">{comment.user.username}</p>
                              <p className="creation-date">{comment.createdAt}</p>
                          </div>
                          <button className="reply btn" onClick={() => reply}><img src="../../images/icon-reply.svg" alt="reply" className="reply-img"/> Reply </button>
                      </div>
                      <p className="user-content">{comment.content}</p>
                    </div>
                </div>
                <div className="under">
                  <UserReply replies={comment.replies} 
                            comment={comment} 
                            handleScore={handleScore} 
                            checkScore={checkScore} 
                            repliesScore={repliesScore} 
                            setModal={setCommentModal} 
                            modal={commentModal}/> 
                </div>
                
            </>  
        )
      })}
      {commentModal && <Modal
                        setModal={setCommentModal} />}

      <CurrentUser data={data}/>
    </main>
  )
}

export default Comments
