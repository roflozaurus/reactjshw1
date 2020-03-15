import React, { Component } from 'react';
import UsersList from '../components/UsersList';
import userStore from '../stores/userStore';
import { getUsers } from '../actions/actionCreators';

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    this.onUserChange = this.onUserChange.bind(this);
  }

  onUserChange() {
    const users = userStore.users;
    this.setState({ users });
  }
  render() {
    return (
      <>
        <UsersList users={this.state.users} />
      </>
    );
  }

  componentDidMount() {
    getUsers();
    userStore.on('change', this.onUserChange);
  }

  componentWillUnmount() {
    userStore.removeListener('change', this.onUserChange);
  }
}
