"use client"

import Link from "next/link"
import { TreeViewDemo_V2 } from "@/components/demo/tree-view-demo-2"

export default function TestPage (){
    return (
        <>
            <div>
                <TreeViewDemo_V2></TreeViewDemo_V2>
            </div>
            <Link 
                href={"https://www.google.com"}
                className="relative after:content-[''] after:absolute after:left-1/2 after:right-1/2 after:bottom-0    after:h-[2px] after:bg-foreground after:transition-all hover:after:left-0 hover:after:right-0"
                target="_blank"
            >Google</Link>
        </>
    )
}