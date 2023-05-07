import "./opportunity.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import OpportunityTable from "./opportunitytable/opportunitytable"


const Opportunity = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <OpportunityTable/>
      </div>
    </div>
  )
}

export default Opportunity