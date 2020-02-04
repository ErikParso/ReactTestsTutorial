import React from 'react';
import Logo from './../../assets/logo.png';
import './styles.scss';

const Header = (props) => {
    return (
        <header>
            <div className="wrap">
                <div className="logo">
                    <img st src={Logo} alt="logo"/>
                </div>
            </div>
        </header>
    );
};

export default Header;
