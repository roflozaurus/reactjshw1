import React, { Component } from 'react';
import { Link } from 'react-router';

export default class User extends Component {
  render() {
    const { userid, id, title, body } = this.props;
    return (
      <div className="card border-secondary mb-3">
        <div className="card-header">
          <Link to={`/posts/${this.props.id}`}>{title}</Link>
        </div>
        <div className="card-body text-secondary">
          <p>{body}</p>
        </div>
      </div>
    );
  }
}
