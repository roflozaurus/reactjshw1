import React, { Component } from 'react';

export default class User extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="card border-secondary mb-3">
        <h3 className="card-header">{this.props.username}</h3>
        <div className="card-body text-secondary">
          <p>{this.props.name}</p>
          <p>{this.props.email}</p>
          <p>{this.props.phone}</p>
          <p>{this.props.website}</p>
        </div>
      </div>
    );
  }
}
