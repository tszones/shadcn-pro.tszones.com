"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"


export function Gallery() {
    const data = [
        {
            "id": 1,
            "title": "Cozy Mountain Retreat",
            "description": "Escape to a serene mountain oasis with breathtaking views.",
            "image": "/masonry/image-0.jpg",
            "buttonText": "Book Now"
        },
        {
            "id": 2,
            "title": "Beachfront Villa",
            "description": "Relax and unwind in this luxurious beachfront villa.",
            "image": "/masonry/image-1.jpg",
            "buttonText": "Explore"
        },
        {
            "id": 3,
            "title": "Urban Loft",
            "description": "Experience city living in this modern and stylish loft.",
            "image": "/masonry/image-2.jpg",
            "buttonText": "Inquire"
        },
        {
            "id": 4,
            "title": "Countryside Farmhouse",
            "description": "Immerse yourself in the tranquility of the countryside.",
            "image": "/masonry/image-3.jpg",
            "buttonText": "Discover"
        },
        {
            "id": 5,
            "title": "Luxury Penthouse",
            "description": "Experience the height of urban living in this stunning penthouse.",
            "image": "/masonry/image-4.jpg",
            "buttonText": "Inquire"
        },
        {
            "id": 6,
            "title": "Lakefront Cabin",
            "description": "Escape to the tranquility of a lakefront cabin in the woods.",
            "image": "/masonry/image-5.jpg",
            "buttonText": "Book Now"
        }
    ]

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto p-4">
            {
                data.map((item) => {
                    return (
                        <div className="bg-background rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-2 hover:shadow-xl" key={item.id}>
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover"
                                style={{ aspectRatio: "600/400", objectFit: "cover" }}
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {item.description}
                                </p>
                                <Button size="sm">{item.buttonText}</Button>
                            </div>
                        </div>
                    )
                })
            }


        </div>
    )
}