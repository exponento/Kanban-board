import React from "react";
import './footer.css'


function Footer(props){

    return(
        <div className="footer">
            <div className="footerTask">
                <p className="footerText">Active tasks: {props.activ}</p>
                <p className="footerText">Finished tasks: {props.finished}</p>
            </div>
            <div>
                <p className="footerText">Kanban board by </p>
            </div>
        </div>
    )
}
export default Footer