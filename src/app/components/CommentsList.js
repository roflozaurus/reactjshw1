import React, { Component } from 'react';
import axios from 'axios';

import Comment from '../components/Comment';

export default class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: [],
    };
  }
  render() {
    if (!this.state.comment.length) {
      return null;
    }

    const comment = this.state.comment.map(comment => {
      return <Comment key={comment.id} {...comment} />;
    });

    return (
      <div>
        <h1>Комменты</h1>
        {comment}
      </div>
    );
  }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/comments').then(response => {
      this.setState({ comment: response.data });
    });
  }
}
