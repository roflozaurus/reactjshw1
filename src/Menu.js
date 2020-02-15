import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        const items = this.props.items.map((item, index) => {
            return <li key={index}><a href={item.href}>{item.title}</a></li>
        })

        return (
            <ul>
                {items}
            </ul>
        )
    }
}
