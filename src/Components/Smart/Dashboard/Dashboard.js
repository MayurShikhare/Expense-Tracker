import './dashboard.css'
import '../../../App.css'

const Dashboard = () => {
    return(
        <div className=  "flex_container dashboard_container">
            <div className="chart_png"></div>
            <div className="dashboard_items ">

                    <div className= "dashboard_availableCash dashboard_item__flexcontainer"> 
                        <p>Available Cash</p>
                        <p>$1000</p>
                    </div>

                    <div className= "dashboard_income dashboard_item__flexcontainer">
                        <p>Net Incomme</p>
                        <p>$2500</p>
                    </div>

                    <div className= "dashboard_expense dashboard_item__flexcontainer">
                        <p>Net Expense</p>
                        <p>$1500</p>
                    </div>
            </div>
        </div>
    )
}
export default Dashboard