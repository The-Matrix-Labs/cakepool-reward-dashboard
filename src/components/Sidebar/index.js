import React from 'react';
import "./style.css";
import rewardIcon from "../assests/images/reward-icon.svg";
import calculatorIcon from "../assests/images/calculator-icon.svg";

export default function Sidebar({options, setOptions})
{
    return (
        <div className='sidebarWrapper'>
            <div className='optionsWrapper'>
                <div className={`options ${options==="reward" ? "activeOption" : ""}`} onClick={()=>setOptions("reward")}>
                    <img src={rewardIcon} alt="reward-icon"/>
                    <div>Rewards</div>
                </div>
                <div className={`options ${options==="calculator" ? "activeOption" : ""}`} onClick={()=>setOptions("calculator")}>
                    <img src={calculatorIcon} alt="reward-icon"/>
                    <div>Calculator</div>
                </div>
            </div>
        </div>
    );
}