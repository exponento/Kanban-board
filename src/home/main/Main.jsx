import React from "react";
import Blok from "./Blok";
import './main.css';


function Main(props){
 
    return(
        <div className="main">
            <Blok view = {'Backlog'} drop={''} data ={props.data} createData = {props.createData}> Backlog </Blok>
            <Blok view = {'Ready'} drop = {'Backlog'} data ={props.data} changeState = {props.changeState}>Ready</Blok>
            <Blok view = {'Progress'} drop = {'Ready'} data ={props.data} changeState = {props.changeState}>In Progress</Blok>
            <Blok view = {'Finished'} drop = {'Progress'} data ={props.data} changeState = {props.changeState}>Finished</Blok>
        </div>
        
    )
}
export default Main