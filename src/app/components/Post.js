import React, { Component } from 'react'

export default class Post extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.post.title}</h2>
                <p>{this.props.post.postBody}</p>
                <p className="author">{this.props.post.author}</p>
            </div>
        )
    }
}
