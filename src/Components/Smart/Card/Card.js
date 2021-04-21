// import {useState} from 'react'
import './card.css'

const Card = (props)=>{

    
    /* 
        Adding the edit functionality to the card. Below code works properly 
        just need to handle data change in global expense array 
    */ 
   
    // const [isEditable,setEditable] = useState(false)
    // const [btnContent,setBtnContent] = useState('Edit')

    // const editHandler = () => {
    //     let state = !isEditable
    //     console.log(state)
    //     state ? setEditable('true') : setEditable('false') 
    //     setBtnContent('Edited')
    //     console.log(isEditable)
    // }

    const deleteHandler = () => {
    //console.log(props.id);
    props.onDelete (props.id)
    }
   
    return(
        <div className="card_container">
            <p className="card_name" /*contentEditable={isEditable}*/ >{props.name}</p>
            <p className="card_price" /*contentEditable={isEditable}*/ >{props.price}</p>
            <p className="card_date" /*contentEditable={isEditable}*/ >{props.date}</p>
            <div className="controllers">
                <button className="delete_btn" onClick = {deleteHandler}>Delete </button>
                {/* <button className="edit_btn" onClick = {editHandler}>{btnContent}</button> */}
                
            </div>
        </div>
       
    )
}
export default Card