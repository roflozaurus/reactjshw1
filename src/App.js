import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Blog from './app/components/Blog'
import WelcomeModal from './app/components/WelcomeModal'
import './styles/styles.css'

export default class App extends Component {
    render() {
        const postsArr =[{
            title: "title1",
            postBody: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis ullam facere asperiores qui exercitationem?",
            author: "ivan"
        },
        {
            title: "title2",
            postBody: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore hic nobis, repellat vel aliquid cumque repellendus odit error consequuntur sequi.",
            author: "oleg"
        }]
        return (
            <div>
                <WelcomeModal />
                <Blog posts={postsArr} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));