import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/songs'>Songs</Link></li>
                        <li><Link to='/song/create'>Create</Link></li>
                    </ul>
                </nav>
          </header>
        );
    }
}

export default Navbar;