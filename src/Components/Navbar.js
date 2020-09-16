import React from 'react';
// withRouter - higher order component
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
    // console.log(props);
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000);
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a href="/" className="brand-logo">React Learning</a>
                <ul className="right">
                    {/* <li><a href="/">Home</a></li>
                    <li><a href='/about'>About</a></li>
                    <li><a href='/contact'>Contact</a></li> */}

                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)