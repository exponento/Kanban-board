import React from "react";

function DropDown ({dropDown, chengeFlag, changeState, view}){
    return(
        <select onChange={(event) => {chengeFlag(true); changeState(`${event.target.value}`,view)}}>
            <option>Выберите задание</option>
            {dropDown}
            <option>Отмена</option>
        </select>
    )
}
export default DropDown