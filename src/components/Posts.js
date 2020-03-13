import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {fetchPosts} from '../actions/postActions'

class Posts extends Component {

  componentDidMount(){
    this.props.fetchPosts()
  }

//this is only necessary since I can't fetch again from db
//POST to this API doesn't actually add to their db
  componentWillReceiveProps(nextProps){
    if(nextProps.newPost){
      this.props.posts.unshift(nextProps.newPost)
    }
  }

  render() {

    const postItems = this.props.posts.map(post => 
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>)

    return (
      <div>
        {postItems}
      </div>
    )
  }

  
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

const mapStatetoProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
})

export default connect(mapStatetoProps, { fetchPosts })(Posts)