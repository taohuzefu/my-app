import React, {Component} from 'react'
import './commentList.css'
import CommentItem from '../comment-item/comment-item';

export default class CommentList extends Component {

  render () {

    const {comments} = this.props

    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display: 'none'}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {comments.map((comment,index) => <CommentItem comment={comment} key={index}/>)}
        </ul>
      </div>
    )
  }
}