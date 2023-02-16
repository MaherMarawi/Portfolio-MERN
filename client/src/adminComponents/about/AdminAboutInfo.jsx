import {
    useQuery,
    useMutation,
    useQueryClient
} from '@tanstack/react-query'
import { getUser, updateUser } from "../../api/aboutApi.js"
import { useState } from "react"
import Loader from '../../loader/Loader.jsx'

export const AdminAboutInfo = () => {

    const queryClient = useQueryClient()
    const [aboutInfo, setAboutInfo] = useState()
    const aboutInfoID = "5fa5af509ad07f363cd869a2"

    const aboutInfoQuery = useQuery({
        queryKey: ["aboutInfo", aboutInfoID],
        queryFn: () => getUser(aboutInfoID),
        onSuccess: data => {
            setAboutInfo(data)
        }
    });
    const aboutInfoMutation = useMutation({
        mutationFn: aboutInfo => updateUser(aboutInfo._id, aboutInfo),
        onSuccess: () => {
            queryClient.invalidateQueries(["aboutInfo", aboutInfoID], { exact: true })
        }
    })
    const handleUserMutation = () => {
        aboutInfoMutation.mutate(aboutInfo)
    }
    const userChange = (e) => {
        setAboutInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    return (
        <div className="right">
            <span>Information</span>
            <div className="items">
                <div className="labels-title">
                    <label>First Name:</label>
                    <label>Last Name:</label>
                    <label>Email:</label>
                    <label>Address:</label>
                    <label>Languages:</label>
                    <label>PhoneNumber:</label>
                </div>
                <div className="labels-info">
                    <input type='text' onChange={userChange} name='firstName' defaultValue={aboutInfoQuery && aboutInfoQuery.data?.firstName} />
                    <input name='lastName' onChange={userChange} defaultValue={aboutInfoQuery && aboutInfoQuery.data?.lastName} />
                    <input type='text' name='email' onChange={userChange} defaultValue={aboutInfoQuery && aboutInfoQuery.data?.email} />
                    <input name='phoneNumber' onChange={userChange} defaultValue={aboutInfoQuery && aboutInfoQuery.data?.phoneNumber} />
                    <input name='address' onChange={userChange} defaultValue={aboutInfoQuery && aboutInfoQuery.data?.address} />
                    <input name='languages' onChange={userChange} defaultValue={aboutInfoQuery && aboutInfoQuery.data?.languages} />
                </div>
            </div>
            <button onClick={(e) => handleUserMutation()}>{aboutInfoMutation.isLoading ? <Loader /> : "Edit"}</button>
        </div>
    )
}
