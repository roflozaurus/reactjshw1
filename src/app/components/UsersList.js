import React, { Component } from 'react';
import User from '../components/User';

export default class UsersList extends Component {
  render() {
    if (!this.props.users.length) {
      return null;
    }
    const users = this.props.users.map((user, index) => {
      return <User key={index} {...user} />;
    });
    console.log(users);
    return (
      <>
        <h1>Пользователи</h1>
        <div> {users} </div>
      </>
    );
  }
}
