import React  from "react";
import './blok.css';
import Button from "./Button";
import { useState } from "react";
import OutPut from "../outPut/OutPut";

function Blok(props){
    const [flag, setFlag] = useState(true);
    function chengeFlag (data){
        setFlag(data)
    }

    
    const viewData = props.data.map(e => {if (e.title === props.view) {
        return(<OutPut id = {e.id} dataOut = {e.name} key = {e.id} />)
    }}) 


    const dropDown = []
     for (let i = 0; i < props.data.length; i++){
        if (props.data[i].title === props.drop){
            dropDown.push(<option title={props.view} id = {props.data[i].id}  key = {props.data[i].id}>{props.data[i].name}</option>)
        }
    }


        return(
            <div className="blok font">
                <p className="name font">{props.children}</p>
                {viewData}
                <Button backState = {props.createData} 
                flag = {flag} 
                view = {props.view} 
                dropDown = {dropDown} 
                chengeFlag = {chengeFlag}
                changeState = {props.changeState}
                />
            </div>
        )
    
}
export default Blok



