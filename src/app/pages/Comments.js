import React, { Component } from 'react';
import CommentList from '../components/CommentsList';

export default class Comments extends Component {
  render() {
    return <div>{!this.props.children ? <CommentList /> : this.props.children}</div>;
  }
}
