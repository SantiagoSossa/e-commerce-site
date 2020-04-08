import React from 'react'
import { Link } from "react-router-dom";

export default function NavBar(props) {
    return(
        <div className="NavBar" id="">
            <Link to='/'>
                <h1>GreenStore</h1>
                </Link>
            <Link to='/cart'>
                <i className="fas fa-shopping-cart"></i>
            </Link>
        </div>
    )
}