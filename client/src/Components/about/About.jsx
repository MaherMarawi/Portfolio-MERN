import "./about.scss"
import {
  useQuery,
} from '@tanstack/react-query'
import { getUser, getAbout } from "../../api/aboutApi.js"

const About = () => {

  const infoQuery = useQuery({
    queryKey: ["userInfo", "5fa5af509ad07f363cd869a2"],
    queryFn: () =>  getUser("5fa5af509ad07f363cd869a2")
  });

  const aboutTextQuery = useQuery({
    queryKey: ["aboutText", "5fa5acebd953234264241730"],
    queryFn: () => getAbout("5fa5acebd953234264241730")
  });
  if(infoQuery.isError) return <span>{infoQuery.error.message}</span>
  if(aboutTextQuery.isError) return <span>{aboutTextQuery.error.message}</span>
  // console.log(aboutTextQuery.data)
  // console.log(infoQuery.data)
  return (
    <div className="about" id="About">
      <div className="container">
        <div className="left">
          <span>About me</span>
          <p>{aboutTextQuery && aboutTextQuery.data?.aboutText}</p>
        </div>
        <div className="right">
          <span>Information</span>
          <div className="items">
            <div className="labels">
              <label>First Name:</label>
              <label>Last Name:</label>
              <label>Email:</label>
              <label>Address:</label>
              <label>Languages:</label>
              <label>PhoneNumber:</label>
            </div>
            <div className="info">
              <label>{infoQuery && infoQuery.data?.firstName}</label>
              <label>{infoQuery && infoQuery.data?.lastName}</label>
              <label>{infoQuery && infoQuery.data?.email}</label>
              <label>{infoQuery && infoQuery.data?.address}</label>
              <label>{infoQuery && infoQuery.data?.languages}</label>
              <label>{infoQuery && infoQuery.data?.phoneNumber}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
