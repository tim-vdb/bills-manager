import { deleteClientAction } from "@/app/api/user.action"
import { Button } from "./ui/button"
import toast from "react-hot-toast"

export default function DeleteClientButton(props: {
    id: string
    onDeleteSuccess: (deletedId: string) => void
}) {
    const onDelete = async () => {
        const result = await deleteClientAction(props.id)

        if (result.message) {
            toast.success("Client deleted successfully")
            props.onDeleteSuccess(props.id)
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
