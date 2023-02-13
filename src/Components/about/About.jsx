import "./about.scss"
import {
  useQuery,
} from '@tanstack/react-query'
import { makeRequest } from "../../axios"

const About = () => {

  const infoQuery = useQuery({
    queryKey: ["info"],
    queryFn: () =>
      makeRequest
        .get("getUser/5fa5af509ad07f363cd869a2")
        .then((res) => res.data),
  });
  const aboutTextQuery = useQuery({
    queryKey: ["aboutText"],
    queryFn: () =>
      makeRequest
        .get("getAbout/5fa5acebd953234264241730")
        .then((res) => res.data),
  });
  console.log(aboutTextQuery.data)
  console.log(infoQuery.data)
  return (
    <div className="about" id="About">
      <div className="container">
        <div className="left">
          <span>About me</span>
          <p>{aboutTextQuery.data && aboutTextQuery.data.aboutText}</p>
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
              <label>{infoQuery.data && infoQuery.data.firstName}</label>
              <label>{infoQuery.data && infoQuery.data.lastName}</label>
              <label>{infoQuery.data && infoQuery.data.email}</label>
              <label>{infoQuery.data && infoQuery.data.address}</label>
              <label>{infoQuery.data && infoQuery.data.languages}</label>
              <label>{infoQuery.data && infoQuery.data.phoneNumber}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
