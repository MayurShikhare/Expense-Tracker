import {useState} from 'react'
import './form.css'
const Form = (props) =>{

    

    const [itemName , setItemName] =useState('')
    const [itemPrice , setItemPrice] =useState('')
    const [itemDate , setItemDate] =useState('')

    const itemNameHandler = (event) => {
        // console.log(event.target.value)
        let itemName = event.target.value
        setItemName(itemName)
       
    }

    const itemPriceHandler = (event) => {
        // console.log(event.target.value)
        let itemPrice = event.target.value
        setItemPrice(itemPrice)
    }

    const itemDateHandler = (event) => {
        // console.log(event.target.value)
        let itemDate = event.target.value
        //console.log(new Date(itemDate).toLocaleDateString())
        setItemDate(itemDate)
    }


    const itemSubmitHandler = (event) =>{
        event.preventDefault()
        const itemData = {
            id : Math.random(),
            name : itemName,
            price : itemPrice,
            date : itemDate
        }
        //passing the form data to NewExpense component
        props.onItemSubmit(itemData)
        
        setItemName('')
        setItemPrice('')
        setItemDate('')
        // console.log(itemData)
    }
    
    return(
        <div> 
             
            <form className = "input_container" onSubmit = {itemSubmitHandler}>
               
                <div className="item_name">
                    <label>Item</label>
                    <input type="text" className = "user_input" value={itemName} onChange = {itemNameHandler} required/>
                </div>

                <div className="item_price">
                    <label>Price</label>
                    <input type="number" className = "user_input" value={itemPrice} onChange = {itemPriceHandler} required/>
                </div>

                <div className="item_date">
                    <label>Date</label>
                    <input type="date" className = "user_input" value={itemDate} onChange = {itemDateHandler} required/>
                </div>

                <div className="item_submit">
                    <button type="submit" className = "submit_button">Add Item</button>
                </div>
            </form>
        </div>
    )
}
export default Form