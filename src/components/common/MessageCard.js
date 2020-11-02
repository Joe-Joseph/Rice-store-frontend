import React from 'react'
import checkIcon from '../../images/check.svg'
import failureIcon from '../../images/cancel.svg'

const MessageCard = ({ message })  =>{

  return (

    <div className="card-message fail">
      <div className="card-message-content">
        <div className="icon-container">
          <img src={failureIcon} className="check-icon"/>
        </div>
        <p className="message">{message}</p>
      </div>
      
    </div>
  )
}

export default MessageCard