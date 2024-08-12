"use client"

import Image from "next/image"

const images = [
  [
    "/masonry/image-0.jpg",
    "/masonry/image-1.jpg",
    "/masonry/image-2.jpg"
  ],
  [
    "/masonry/image-3.jpg",
    "/masonry/image-4.jpg",
    "/masonry/image-5.jpg"
  ],
  [
    "/masonry/image-6.jpg",
    "/masonry/image-7.jpg",
    "/masonry/image-8.jpg"
  ],
  [
    "/masonry/image-9.jpg",
    "/masonry/image-10.jpg",
    "/masonry/image-11.jpg"
  ]
]

export const Masonry = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((column, columnIndex) => (
        <div key={columnIndex} className="grid gap-4">
          {column.map((src, imageIndex) => (
            <div key={imageIndex}>
              <Image className="h-auto max-w-full rounded-lg !my-0" src={src} alt="" width={300} height={300} />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}