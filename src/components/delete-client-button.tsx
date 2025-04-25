import { deleteClientAction } from "@/app/api/user.action"
import { Button } from "./ui/button"
import toast from "react-hot-toast"

export default function DeleteClientButton({
    id,
    onDeleteSuccess,
}: {
    id: string
    onDeleteSuccess: (id: string) => void
}) {
    const onDelete = async () => {
        const result = await deleteClientAction(id)

        if (result.message) {
            toast.success("Client deleted successfully")
            onDeleteSuccess(id)
        } else if (result.error) {
            toast.error(result.error || "Something went wrong.")
        }
    }

    return (
        <Button
            onClick={onDelete}
            variant="destructive"
            className="w-fit hover:cursor-pointer bg-red-400"
        >
            Delete customer
        </Button>
    )
}
