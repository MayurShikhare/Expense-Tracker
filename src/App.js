import React,{useState}from "react"

//import the components
import HeroImage from './Components/Dumb/HeroImage/HeroImage'
// import Dashboard from './Components/Smart/Dashboard/Dashboard'
import NewExpense from './Components/Smart/NewExpense/NewExpense'
import Card from './Components/Smart/Card/Card'
import Footer from './Components/Dumb/Footer/Footer'

//import the style sheets
import '../src/App.css'

const InitialExpenses = [

// ,

// {
  
//   name : 'test2',
//   price : '121',
//   date : '12-12-12', 
//   id : Math.floor(Math.random() * 100000) 
// },
// {
  
//   name : 'test3',
//   price : '121',
//   date : '12-12-12', 
//   id : Math.floor(Math.random() * 100000) 
// },
// {
  
//   name : 'test4',
//   price : '121',
//   date : '12-12-12', 
//   id : Math.floor(Math.random() * 100000) 
// }

]
const App = ()=>{

  const [expense , addNewItem] = useState(InitialExpenses)
  // console.log(expense)

  // fetching the data from Form through NewEpense compoent
  const fetchFormData = (newItem) => {
    //console.log(newItem)
    //newItem is an object
    addNewItem(prevExpenses => {
      return [newItem, ...prevExpenses]
    })
  }
  console.log(expense)

  //fetching id to delete expense
  const getDeleteIdHandler = (id ) =>{
    // console.log(id);
    //console.log(expense);
    let updatedExpense = [...expense]
    //console.log(updatedExpense);
    let renderUpdatedArray = updatedExpense.filter(expItem => expItem.id !== id)
    //console.log(renderUpdatedArray);
    addNewItem(renderUpdatedArray)

  } 
  
  return(
     
  <div>
      <HeroImage />
      {/* <Dashboard /> */}
      <NewExpense onUserSubmit = {fetchFormData} />
      {
      expense.map(exp => 
              <Card  
              key = {exp.id}
              id = {exp.id}
              name = {exp.name}
              price = {exp.price} 
              date = {new Date(exp.date).toLocaleDateString('us-En',{ year: 'numeric', month: 'long', day: 'numeric'})}
              onDelete = {getDeleteIdHandler}
              />
      )}
     
      <Footer />   
  </div>
  )

}
export default App