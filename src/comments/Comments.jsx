import React from "react";
import './comments.css';
import { Link } from "react-router-dom";


function Comments ({name, description, changeDescription}){

    function getText (){
        const text = document.getElementById('textArea').value;
        changeDescription(name, text);
    }

    return(
        <div className="comm">
            <div className="commentDiv">
            <div className="commentDiv-nameTask">{name} <Link to="/" title="Save & Exit"><button className="commentBtn" onClick={getText}>&#10007;</button></Link> </div>
                <textarea className="commentArea"  name="" id="textArea" cols="30" rows="10">{description}</textarea>
            </div>
        </div>
    )
}
export default Comments