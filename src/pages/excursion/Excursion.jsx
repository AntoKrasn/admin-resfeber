import "./excursion.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Excursiontable from "./excursiontable/Excursiontable"


const Excursion = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Excursiontable/>
      </div>
    </div>
  )
}

export default Excursion