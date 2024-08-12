"use client"

import React from 'react';

export const Masonry_V2 = () => {
    const items = [
        { height: 140 }, { height: 190 }, { height: 170 }, { height: 120 },
        { height: 160 }, { height: 180 }, { height: 140 }, { height: 150 },
        { height: 170 }, { height: 170 }, { height: 140 }, { height: 190 },
        { height: 170 }, { height: 120 }, { height: 160 }, { height: 180 },
        { height: 140 }, { height: 150 }, { height: 170 }, { height: 170 }
    ];

    const itemClassName = "w-[calc(25%-12px)] relative mt-[2%] rounded-sm border-1 shadow-md p-[15px] bg-[#dee0e1]";

    return (
        <div className="flex flex-col flex-wrap w-full relative gap-3 rounded-sm border-1 shadow-md p-[15px] s-between h-[960px]">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={itemClassName}
                    style={{ height: `${item.height}px` }}
                ></div>
            ))}
        </div>
    );
}