import React, { Component } from 'react'
import {NavLink} from "react-router-dom";
export class Navigation extends Component {
 
    render() {
        return (
            <div className="nav">
                <ul>
                <li><NavLink to="/">Card</NavLink></li>
                <li><NavLink to="/image">Image</NavLink></li>
                    <li><NavLink to="/box-shadow">Box Shadow</NavLink></li>
                    <li><NavLink to="/heading">Heading style</NavLink></li>
                    <li><NavLink to="/paragraph">paragraph style</NavLink></li>
                    <li><NavLink to="/button">Button style</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default Navigation
