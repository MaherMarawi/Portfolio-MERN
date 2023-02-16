import "./adminAbout.scss"
import { AdminAboutInfo } from "./AdminAboutInfo"
import AdminAboutText from "./AdminAboutText"

const AdminAbout = () => {

  
  return (
    <div className="about" id="About">
      <div className="container">
        <AdminAboutText />
        <AdminAboutInfo />
      </div>
    </div>
  )
}

export default AdminAbout
