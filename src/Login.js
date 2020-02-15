
import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <form>
                <label> Логин <input type="text" /></label>
                <label> Пароль <input type="text" /></label>
                <input type="submit" value="Войти"/>
            </form>
        )
    }
}
