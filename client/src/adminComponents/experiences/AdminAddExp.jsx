import "./adminExp.scss"
import { useState } from "react"
import { addExperience } from "../../api/experiencesApi"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import Loader from "../../loader/Loader"

const AdminAddExp = () => {

    const queryClient = useQueryClient()
    const [newExp, setNewExp] = useState()

    const addExperienceMutation = useMutation({
        mutationFn: exp => addExperience(exp),
        onSuccess: () => {
            queryClient.invalidateQueries(["experiences"])
        }
    })
    const handleChange = (e) => {
        setNewExp({ ...newExp, [e.target.name]: e.target.value })
    }
    const handleSubmit = () => {
        addExperienceMutation.mutate(newExp)
    }
    return (
        <div className="experience">
            <input placeholder="name" name="name" onChange={handleChange} />
            <input placeholder="grade" name="grade" onChange={handleChange} />
            <button onClick={() => handleSubmit()}>{addExperienceMutation.isLoading ? <Loader /> : "Add"}</button>
        </div>
    )
}

export default AdminAddExp