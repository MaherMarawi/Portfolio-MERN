import "./about.scss"
import {
    useQuery,
    useMutation,
    useQueryClient
} from '@tanstack/react-query'
import { getUser, getAbout, updateAbout, updateUser } from "../../api/aboutApi.js"
import { useState } from "react"
const AdminAbout = () => {

    const queryClient = useQueryClient()

    const userID = "5fa5af509ad07f363cd869a2"
    const aboutID = "5fa5acebd953234264241730"

    const [info, setInfo] = useState()
    const [aboutText, setAboutText] = useState()

    const infoQuery = useQuery({
        queryKey: ["userInfo", userID],
        queryFn: () => getUser(userID),
        onSuccess: () => {
            setInfo(infoQuery.data)
        }
    });
    const aboutTextQuery = useQuery({
        queryKey: ["aboutText", aboutID],
        queryFn: () => getAbout(aboutID),
        onSuccess: () => {
            setAboutText(aboutTextQuery.data)
        }
    });

    const aboutMutation = useMutation({
        mutationFn: aboutText => updateAbout(aboutText._id, aboutText),
        onSuccess: () => {
            queryClient.invalidateQueries(["aboutText", aboutID], { exact: true })

        }
    })

    const infoMutation = useMutation({
        mutationFn: info => updateUser(info._id, info),
        onSuccess: () => {
            queryClient.invalidateQueries(["userInfo", userID], { exact: true })
        }
    })

    const handleAboutMutation = () => {
        aboutMutation.mutate(aboutText)
    }
    const handleUserMutation = () => {
        infoMutation.mutate(info)
    }
    const userChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const aboutChange = (e) => {
        setAboutText((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <div className="about" id="About">
            <div className="container">
                <div className="left">
                    <span>About me</span>
                    <p>{aboutTextQuery && aboutTextQuery.data?.aboutText}</p>
                    <div className="right">
                        <div className="items">
                            <textarea name="aboutText" placeholder={aboutTextQuery && aboutTextQuery.data?.aboutText} style={{width: "90%", height: "100px"}} onChange={aboutChange}></textarea>
                            <button onClick={(e) => handleAboutMutation()}>edit</button>
                        </div>
                    </div>
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
                        <div className="labels">
                            <input type='text' onChange={userChange} name='firstName' placeholder={infoQuery && infoQuery.data?.firstName} />
                            <input name='lastName' onChange={userChange} placeholder={infoQuery && infoQuery.data?.lastName} />
                            <input type='text' name='email' onChange={userChange} placeholder={infoQuery && infoQuery.data?.email} />
                            <input name='phoneNumber' onChange={userChange} placeholder={infoQuery && infoQuery.data?.phoneNumber} />
                            <input name='address' onChange={userChange} placeholder={infoQuery && infoQuery.data?.address} />
                            <input name='languages' onChange={userChange} placeholder={infoQuery && infoQuery.data?.languages} />
                            <button onClick={(e) => handleUserMutation()}>edit</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AdminAbout


// My name is Maher and I am originally from Syria.  Although I have been living in the Netherlands for 5 years now and I have the language level of b1, only I am still improving my skills every day.  I followed a course with Code Matrix Master and there is a connection with MERN Stack and my study in Syria, it was also ICT related.  Unfortunately I was unable to complete this study because of the war, and later I graduated as a junior Java back-end developer at TechGrounds.