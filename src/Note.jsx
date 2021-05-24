import React from "react";
import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
const Note=(props)=>{
    const deleteNote=()=>{
        props.deleteItem(props.id);
    }
    return(
        <>
        
        <div className="note">
        <div className="cards">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <Button onClick={deleteNote}><DeleteOutlineIcon/></Button>
        </div>
        </div>
        </>
    )
}
export default Note;