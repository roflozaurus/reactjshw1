import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Login from './Login'
import Menu from './Menu'

export default class App extends Component {
    render() {
        const menuItems = [
            {href: " / ", title: "Заглушка1"},
            {href: " / ", title: "Загулшка2"},
            {href: " / ", title: "Заглушка3"},
            {href: " / ", title: "Заглушка4"}
        ]

        return (
            <div>
                <Menu items={ menuItems } />
                <Login />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
