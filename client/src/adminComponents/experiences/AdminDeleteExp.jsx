
import { deleteExperience } from "../../api/experiencesApi"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import Loader from "../../loader/Loader"

const AdminDeleteExp = ({ id }) => {
    const queryClient = useQueryClient()

    const deleteExperienceMutation = useMutation({
        mutationFn: id => deleteExperience(id),
        onSuccess: () => {
            queryClient.invalidateQueries(["experiences"])
        }
    })
    const handleSubmit = () => {
        deleteExperienceMutation.mutate(id)
    }
    return (
        <div>
            <button onClick={() => handleSubmit()}>{deleteExperienceMutation.isLoading ? <Loader /> : "Delete"}</button>
        </div>
    )
}

export default AdminDeleteExp