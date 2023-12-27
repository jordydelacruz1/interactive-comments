import React from 'react'

const Modal = ( { setModal }) => {
  return (
    <div className="modal-background">
        <div className="modal">
        <h2>Delete comment</h2>
        <p>Are you sure you want to delete this comment? This will remove the 
            comment and can't be undone.
        </p>
        <div className="modal-buttons">
            <button className="cancel" onClick={() => setModal(false)}> no, cancel</button>
            <button className="confirm-delete"> yes, delete </button>
        </div>
        </div>
    </div>
    
  )
}

export default Modal
