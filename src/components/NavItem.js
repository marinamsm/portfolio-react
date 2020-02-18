import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navitem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item,
            tolink: props.tolink,
            activec: props.activec
        }
    }

    render() {
        return (
            <li>
                <Link to={this.props.tolink} onClick={this.props.activec.bind(this,this.props.item)}>
                    {this.props.item}
                </Link>
            </li>
        )
    }
}

export default Navitem;