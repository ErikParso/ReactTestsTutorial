import React from 'react';
import Logo from './../../assets/logo.png';
import './styles.scss';

const Header = (props) => {
    return (
        <header data-test="header-component">
            <div className="wrap">
                <div className="logo">
                    <img data-test="img-logo" src={Logo} alt="logo"/>
                </div>
            </div>
        </header>
    );
};

export default Header;
