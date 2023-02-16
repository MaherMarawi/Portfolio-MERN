import { deleteEducation } from '../../api/educationApi'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import Loader from "../../loader/Loader"

const AdminDeleteEdu = ({ id }) => {
    const queryClient = useQueryClient()

    const deleteEducationMutation = useMutation({
        mutationFn: id => deleteEducation(id),
        onSuccess: () => {
            queryClient.invalidateQueries(["education"])
        }
    })

    const handleSubmit = () => {
        deleteEducationMutation.mutate(id)
    }
    return (
        <div>
            <button disabled={deleteEducationMutation.isLoading} onClick={() => handleSubmit()} >{deleteEducationMutation.isLoading ? <Loader /> : "Delete"}</button>
        </div>
    )
}

export default AdminDeleteEdu