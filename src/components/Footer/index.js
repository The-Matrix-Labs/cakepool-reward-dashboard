import React from 'react';
import Logo from "../assests/images/logo.svg";
import telegramIcon from "../assests/images/telegram-icon.svg";
import twitterIcon from "../assests/images/twitter-icon.svg";
import redditIcon from "../assests/images/reddit-icon.svg";
import discordIcon from "../assests/images/discord-icon.svg";
import "./style.css";

export default function Footer()
{
    return (
        <div className='footerWrapper'>
            <div className='logoWrapper'>
                <img src={Logo} alt="logo"/>
            </div>
            <div className='socialWrapper'>
                <img src={telegramIcon} alt="telegram-icon"/>
                <img src={twitterIcon} alt="twitter-icon"/>
                <img src={redditIcon} alt="reddit-icon"/>
                <img src={discordIcon} alt="discord-icon"/>
            </div>
        </div>
    );
}