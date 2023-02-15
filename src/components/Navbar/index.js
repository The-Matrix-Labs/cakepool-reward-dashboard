import React from 'react';
import Logo from "../assests/images/Logo.png";
import "./style.css";

export default function Navbar()
{
    return (
        <div className='navbarWrapper'>
            <div className='logoWrapper'>
                <img src={Logo} alt="logo"/>
                <div>Cakepool</div>
            </div>
            <button className='connectWalletBtn'>Connect Wallet</button>
        </div>
    );
}
