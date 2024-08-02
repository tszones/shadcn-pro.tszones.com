"use client"

import Link from "next/link"
import { StarRatingDemo } from "@/components/demo/star-rating-demo"
import { Feedback } from "@/components/block/feedback"

export default function TestPage() {
    return (
        <>

            <span className="loading flex items-center">
                <span className="bg-white w-1 h-1 rounded-full inline-block mx-0.5 animate-blink" />
                <span className="bg-white w-1 h-1 rounded-full inline-block mx-0.5 animate-blink delay-200" />
                <span className="bg-white w-1 h-1 rounded-full inline-block mx-0.5 animate-blink delay-500" />
            </span>

            <Link
                href={"https://www.google.com"}
                className="relative after:content-[''] after:absolute after:left-1/2 after:right-1/2 after:bottom-0    after:h-[2px] after:bg-foreground after:transition-all hover:after:left-0 hover:after:right-0"
                target="_blank"
            >Google</Link>
        </>
    )
}