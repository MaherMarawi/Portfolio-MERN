import {
    useQuery,
    useMutation,
    useQueryClient
} from '@tanstack/react-query'
import { getAbout, updateAbout } from "../../api/aboutApi.js"
import { useState } from "react"
import Loader from "../../loader/Loader"
const AdminAboutText = () => {

    const queryClient = useQueryClient()

    const aboutTextID = "5fa5acebd953234264241730"
    const [aboutText, setAboutText] = useState()

    const aboutTextQuery = useQuery({
        queryKey: ["aboutText", aboutTextID],
        queryFn: () => getAbout(aboutTextID),
        onSuccess: data => {
            setAboutText(data)
        }
    });
    const aboutTextMutation = useMutation({
        mutationFn: aboutText => updateAbout(aboutText._id, aboutText),
        onSuccess: () => {
            queryClient.invalidateQueries(["aboutText", aboutTextID], { exact: true })
        }
    })

    const handleAboutTextMutation = () => {
        aboutTextMutation.mutate(aboutText)
    }

    const aboutChange = (e) => {
        setAboutText((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        console.log(aboutText._id)
    }

    return (
        <div className="left">
            <span>About me</span>
            <div className="form-about">
                <textarea  name="aboutText" defaultValue={aboutTextQuery && aboutTextQuery.data?.aboutText} style={{ width: "90%", height: "100px" }} onChange={aboutChange}></textarea>
                <button onClick={(e) => handleAboutTextMutation()}>{aboutTextMutation.isLoading ? <Loader /> : "Edit"}</button>
            </div>
        </div>
    )
}

export default AdminAboutText


// My name is Maher and I am originally from Syria.  Although I have been living in the Netherlands for 5 years now and I have the language level of b1, only I am still improving my skills every day.  I followed a course with Code Matrix Master and there is a connection with MERN Stack and my study in Syria, it was also ICT related.  Unfortunately I was unable to complete this study because of the war, and later I graduated as a junior Java back-end developer at TechGrounds.