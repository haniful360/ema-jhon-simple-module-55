import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
             <div className='container'>
            <nav className='header'>
                <div>
                    <img src={logo} alt="ema-jhon" />
                </div>
                <div>
                    <ul className='menu-item' >
                        <li><Link to="/">shop</Link></li>
                        <li><Link to="/orders">Orders</Link></li>
                        <li><Link to="/inventory">Manage inventory</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
        </div>
    );
};

export default Header;