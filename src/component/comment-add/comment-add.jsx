import React, {Component} from 'react'

export default class CommentAdd extends Component {

  state = {
    comment: {
      username: '',
      content: ''
    }
  }

  handleUsernameInput = event => {
    const username = event.target.value
    const {comment} = this.state
    comment.username = username
    this.setState({comment})
  }

  handleContentInput = event => {
    const content = event.target.value
    const {comment} = this.state
    comment.content = content
    this.setState({comment})
  }

  handleSubmit = () => {
    const {comment} = this.state
    const {addComment} = this.props
    addComment(comment)
    this.setState({
                    comment: {
                      username: '',
                      content: ''
                    }
                  })
  }

  render () {
    const {username,content} = this.state.comment
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className="form-control" placeholder="用户名"
            value={username} onChange={this.handleUsernameInput}/>
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea className="form-control" rows="6" placeholder="评论内容"
            value={content} onChange={this.handleContentInput}></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right"
              onClick={this.handleSubmit}>提交</button>
            </div>
          </div>
        </form>
      </div>

    )
  }
}