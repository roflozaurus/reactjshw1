import React, { Component } from 'react'

export default class WelcomeModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false
        }
    }

    render() {
        let modalMessage; 

        const change = () => {
            this.setState({modal: !this.state.modal})
        }

        if(this.state.modal){
            modalMessage = <div className="modal_window">
                aleg
                <div onClick={change}>
                    закрыть
                </div>
            </div>
        }

        return (
            <div>
                {modalMessage}
            </div>
        )
    }

    componentDidMount(){
        this.setState({modal: !this.state.modal});
    }
}
