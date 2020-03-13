import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { createPost } from '../actions/postActions'

class PostForm extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       title: '',
       body: ''
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const newPost = {
      title: this.state.title,
      body: this.state.body
    }

    this.props.createPost(newPost)

  }
  

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <label>Title: </label>
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
          <br />

          <label>Body: </label>
          <textarea name="body" value={this.state.body} onChange={this.handleChange} />
          <br />

          <button type="submit">Add post</button>

        </form>
      </div>
    )
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
}

export default connect(null, {createPost})(PostForm)
