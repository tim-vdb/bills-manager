// /src/components/delete-client-button.tsx
"use client"

import { Button } from "./ui/button";
import toast from "react-hot-toast";

export default function DeleteClientButton({
    id,
    onDeleteSuccess,
}: {
    id: string;
    onDeleteSuccess: (id: string) => void;
}) {
    const onDelete = async () => {
        try {
            const res = await fetch("/api/client/delete", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ clientId: id }),
            });

            const result = await res.json();

            if (result.message) {
                toast.success("Client deleted successfully");
                onDeleteSuccess(id);
            } else if (result.error) {
                toast.error(result.error || "Something went wrong.");
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong.");
        }
    };

    return (
        <Button
            onClick={onDelete}
            variant="destructive"
            className="w-fit hover:cursor-pointer bg-red-400"
        >
            Delete customer
        </Button>
    );
}
