import React,{useState} from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote=(props)=>{
    const[expand,setExpand]=useState(false);
    const[note,setNote]=useState({
        title:"",
        content:"",
    });
    const inputEvent=(event)=>{
        const{name,value}=event.target;
        setNote((prevData)=>{
            return{    
                ...prevData,
                [name]:value,
            }
        })
    }
    const addEvent=()=>{
        props.passNote(note);
        setNote({
            title:"",
            content:"",
        }); 
    }
    const expandIt=()=>{
        setExpand(true);
    }
    const btoNormal=()=>{
        setExpand(false);
    }
    return(
        <>
        
        <div className="main_div" onDoubleClick={btoNormal}>
            <form>
            {expand?
            <input type="text" name="title" value={note.title} onChange={inputEvent} placeholder="Title" autoComplete="off"/>:null}
            <br/>
            <br/>
            <textarea row="" column="" name="content" value={note.content} onChange={inputEvent} onClick={expandIt}  placeholder="Write a note..."></textarea>
            <br/>
            <br/>
            {expand?
            <Button onClick={addEvent}><AddIcon/></Button>:null}
            </form>
        </div>
        </>
    )
}
export default CreateNote;