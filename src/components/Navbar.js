import React, { Component } from 'react';
import Navitem from './NavItem';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NavItemActive:''
        }
        this.activeitem = this.activeitem.bind(this);
    }

    activeitem(x) {
        console.log('element id is: ', x);
        if(this.state.NavItemActive.length > 0) {
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        } else {
            this.setState({'NavItemActive': x}, () => {
                document.getElementById(this.state.NavItemActive).classList.add('active');
            });
        }
    };

    render() {
        return (
            <nav>
                <ul>
                    <Navitem item="Home" tolink="/" activec={this.activeitem}></Navitem>
                    <Navitem item="About" tolink="/about" activec={this.activeitem}></Navitem>
                    <Navitem item="Education" tolink="/education" activec={this.activeitem}></Navitem>
                    <Navitem item="Skills" tolink="/skills" activec={this.activeitem}></Navitem>
                    <Navitem item="Contact" tolink="/contact" activec={this.activeitem}></Navitem>
                </ul>
            </nav>
            )
        }
}

export default Navbar;

