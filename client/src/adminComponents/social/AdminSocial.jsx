import React, { useState } from 'react'
import {
    useQuery,
    useMutation,
    useQueryClient,
} from '@tanstack/react-query'
import { getMainTitle, updateMainTitle } from '../../api/mainTitleApi'
import './adminSocial.scss'
import Loader from '../../loader/Loader'


function AdminSocial() {
    const queryClient = useQueryClient()

    const titleID = "611628d3f0f4731e50547bee"
    const [title, setTitle] = useState({
        mainTitleText: ""
    })
    
    const mainTitleQuery = useQuery({
        queryKey: ["mainTitle", titleID],
        queryFn: () => getMainTitle(titleID),
        onSuccess: data => {
            setTitle(data)
        }
    });
    const mainTitleMutation = useMutation({
        mutationFn: title => updateMainTitle(title._id, title),
        onSuccess: () => {
            queryClient.invalidateQueries(["mainTitle", titleID])
        },
    })
    const handleTitleMutation = () => {
        mainTitleMutation.mutate(title)
    }
    const handleChange = (e) => {
        setTitle((prev) => ({...prev,[e.target.name]: e.target.value}))
    }
    return (
        <div className="admin-social">
            <div className='container'>
                <span>Main Title</span>
                <input name="mainTitleText" disabled={mainTitleMutation.isLoading} defaultValue={mainTitleQuery && mainTitleQuery.data?.mainTitleText} onChange={handleChange} ></input>
                <button onClick={(e) => handleTitleMutation()} disabled={mainTitleMutation.isLoading} >{mainTitleMutation.isLoading ? <Loader /> : 'Edit'}</button>
            </div>
        </div>
    )
}

export default AdminSocial
