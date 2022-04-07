import React from "react";
import './outPut.css';
import { Link } from "react-router-dom";

function OutPut (props){
    return(
        <Link className="outPutLink" to={`/comments/${props.id}`} title="View and edit comments">
            <div className='outPut'>
                {props.dataOut}
            </div>
        </Link>
        
    ) 
}
export default OutPut