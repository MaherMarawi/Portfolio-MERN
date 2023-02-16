import "./admin.scss"
import AdminSocial from "../../adminComponents/social/AdminSocial"
import AdminAbout from "../../adminComponents/about/AdminAbout"
import AdminExp from "../../adminComponents/experiences/AdminExp"
import Navbar from "../../Components/navbar/Navbar"
import AdminPro from "../../adminComponents/projects/AdminPro"
import AdminEdu from "../../adminComponents/education/AdminEdu"
function Admin() {
  return (
    <div className="admin">
      <Navbar />
      <AdminSocial />
      <AdminAbout />
      <AdminExp />
      <AdminPro />
      <AdminEdu />
    </div>
  )
}

export default Admin