import React, {Component} from 'react'
import './commentItem.css'

export default class CommentItem extends Component {

  render () {

    const {comment} = this.props
    const {index} = this.props

    return (
      <li key={index} className="list-group-item">
        <div className="handle">
          <a href="javascript:;">删除</a>
        </div>
        <p className="user">
          <span>{comment.username}</span>
          <span>说:</span>
        </p>
        <p className="centence">{comment.content}</p>
      </li>
    )
  }
}