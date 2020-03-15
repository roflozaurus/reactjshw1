import axios from 'axios';
import dispatcher from '../dispatcher'

export function getUsers() {
  axios.get('http://jsonplaceholder.typicode.com/users').then(response => {
    const data = response.data;
    const action = {
        type: 'GET_USERS',
        data
    };
    dispatcher.dispatch(action);
  });
}
