import React from "react";
import './heder.css';
import { useState } from "react";
import arrowUp from "../images/ArrowUp.png";
import arrowDown from "../images/ArrowDown.png";
import userAvatar from "../images/UserAvatar.png"


function Heder (){
    const [profile, setProfile] = useState('heder-profile_login none')

    function click (){
        profile === 'heder-profile_login none'?setProfile('heder-profile_login'):setProfile('heder-profile_login none')
    }

    return(
        <div className="heder">
            
            <h1 className="heder-projectName">Awesome Kanban Board</h1>
            <div className="heder-profile" onClick={click}>
                <img src={userAvatar} alt="userAvatar" />
               {profile ==='heder-profile_login none'?<img className="img" src={arrowDown} alt="" />: <img className="img" src={arrowUp} alt="" /> } 
            </div>
            <div className={profile}>
                    <p className="heder-profile_name">Profile</p>
                    <button className="heder-profile_btn">Log Out</button>
                </div>
        </div>
    )
}
export default Heder