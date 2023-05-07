import "./place.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Placetable from "./table/placetable"


const Place = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Placetable/>
      </div>
    </div>
  )
}

export default Place