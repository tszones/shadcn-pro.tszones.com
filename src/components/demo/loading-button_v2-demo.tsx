"use client"

import { LoadingButtonV2 } from "@/components/ui-pro/loading-button_v2"

export const LoadingButtonV2Demo = () => {
    return (
        <div>
            <LoadingButtonV2
                variant="destructive"
                loading
            >Submit</LoadingButtonV2>	
        </div>
    )
}