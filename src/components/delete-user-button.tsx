// /src/components/delete-user-button.tsx
"use client"

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function DeleteUserButton() {
    const router = useRouter()

    const onDelete = async () => {
        try {
            const res = await fetch("/api/user/delete", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            });

            const result = await res.json();

            if (result.message) {
                await signOut({ redirect: false, callbackUrl: "/login" })
                toast.success("User deleted successfully");
            } else if (result.error) {
                toast.error(result.error || "Something went wrong.");
                router.push("/login")
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
