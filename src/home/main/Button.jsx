import React, { useState } from "react";
import DropDown from "./DropDown";
import './main.css';

function Button (props){
    const [value, setValue] = useState();

    if (props.flag && props.dropDown.length !== 0) {
        return(
            <>
                <button className="btn" onClick={()=> {props.chengeFlag(false)}}>+Add card</button>
            </>
        )
    } if (props.flag && props.dropDown.length === 0){
        return(
            <>
                <button disabled className="btn btnDisabled" >+Add card</button>
            </>
        )
    } else if (props.view === 'Backlog'){
        return(
            <>
                <input type="text" placeholder="Enter task" onChange={(event) => {setValue(event.target.value)}}/> <br />
                <button onClick={() => {props.backState(value); props.chengeFlag(true); setValue()}}>Submit</button>
            </>
        )
    } else {
        return(
            <>
                <DropDown dropDown = {props.dropDown} 
                chengeFlag = {props.chengeFlag} 
                changeState = {props.changeState}
                view = {props.view}
                />
            </>
        )
    }

}
export default Button