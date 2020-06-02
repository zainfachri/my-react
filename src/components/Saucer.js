import React, {Component} from 'react';

export default class Saucer extends Component{
    render() {
        return(
            <div>
                <p>My Saucer:</p>
                <ul>    
                    <li>Ukuran: {this.props.width}</li>
                </ul>
            </div>
        )
    }
}