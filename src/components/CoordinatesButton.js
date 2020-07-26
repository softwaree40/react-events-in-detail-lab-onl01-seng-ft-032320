import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    handle =(event)=>{

     this.props.onReceiveCoordinates([event.clientX, event.clientY])

    }



    render() {

        return (
            <div>
                <button onClick={this.handle}></button>
            </div>
        )
    }
}
