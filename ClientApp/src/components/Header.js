import React, { Component } from 'react';
import logo from '../media/debaser.png';
import '../css/Header.css';

export default class Header extends Component {
    render() {
        return (
            <nav className="navigation">
                <div className="brand">
                    <img src={logo}/>
                </div>
                <div className="content">
                    <p>Pågående Evenemang</p>
                </div>
            </nav>
        );
    }
}
