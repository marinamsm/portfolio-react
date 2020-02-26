import React, { Component } from 'react';
import Widecard from '../components/Widecard';
class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="Computer Science, B.A" where="Universidade Federal de Ouro Preto – UFOP, Brazil" from="February 2015" to="February 2019"/>
                <Widecard title="Translation Studies, BSc" where="Universidade Federal de Ouro Preto – UFOP, Brazil" from="2009" to="2013"/>
            </div>
        )
    }
}

export default Education