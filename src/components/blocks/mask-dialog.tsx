"use client"

import {
    Dialog,
    DialogContent,
    DialogTrigger
} from "@/components/ui/dialog";
import { CheckCircle } from "lucide-react";

export const MaskDialog = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <div className="bg-red-500 text-white p-2 rounded-md cursor-pointer">Open Dialog</div>
            </DialogTrigger>
            <DialogContent
                className="sm:max-w-[425px] bg-transparent border-none shadow-none"
                onInteractOutside={(e) => {
                    e.preventDefault();
                }}
            >
                <div className="w-full h-full text-center flex justify-center items-center flex-col gap-[18px]">
                    <CheckCircle size={60} className="text-green-500" />
                    <p className="text-white text-center max-w-[338px]">Your review will appear here within 48 hours! Thanks for your time!</p>
                </div>
            </DialogContent>
        </Dialog>
    )
}