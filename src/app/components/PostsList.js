import React, { Component } from 'react';
import axios from 'axios';

import Post from '../components/Post';

export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
    };
  }
  render() {
    if (!this.state.post.length) {
      return null;
    }

    const post = this.state.post.map(post => {
      return <Post key={post.id} {...post} />;
    });

    return (
      <div>
        <h1>Посты</h1>
        {post}
      </div>
    );
  }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/posts').then(response => {
      this.setState({ post: response.data });
    });
  }
}
