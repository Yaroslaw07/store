import React from "react";

function AddButton({action,item}){


    return(
        <div className="add_button">
            <button onClick = {_ => action(item)}>Add</button>
        </div>
    )
}

export default React.memo(AddButton);