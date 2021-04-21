import Form from '../Form/Form'
import './newExpense.css'
const NewExpense = (props) =>{

    // const [itemName , setItemName] =useState('')
    // const [itemPrice , setItemPrice] =useState('')
    // const [itemDate , setItemDate] =useState('')

    // // const fetchFormData = (itemData) => {
    // //     console.log(itemData)
    // // }
    
    return(
        <div className="form_container">
            
            <div className="pattern">
                    <p className="instruction">Add New Item</p>
            </div>
            <Form onItemSubmit = {props.onUserSubmit}/>
        </div>
    )
}
export default NewExpense