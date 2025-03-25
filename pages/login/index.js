'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from "next/legacy/image"
import { LoginForm } from '@/components/auth/LoginForm'
import { AdminLogin } from '@/components/auth/AdminLogin'

const images = [
    '/banner/44e71369-0d07-4a79-98da-1dc78f6bafee.jpg',
    '/banner/59fdb1af-650a-4f31-9570-f1af0ee99957.jpg',
    '/banner/91ae0308-bf7e-4825-9335-53ed7cd25c31.jpg',
]

export default function LoginPage() {
    const [currentImage, setCurrentImage] = useState(0);
    const [formType, setFormType] = useState("login");
    const searchParams = useSearchParams();
    let query = searchParams;

    useEffect(() => {
        const formTypeFromQuery = query.get("formType") || "login";
        setFormType(formTypeFromQuery);

        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length)
        }, 3000);

        return () => clearInterval(interval)
    }, [query])

    return (
        <div className="flex h-screen">
            <div className="relative hidden w-1/2 lg:block">
                {images.map((src, index) => (
                    <Image
                        key={src}
                        src={src || "/placeholder.svg"}
                        alt={`Background ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className={`transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'
                            }`}
                    />
                ))}
            </div>
            <div className="flex w-full items-center justify-center bg-gray-100 lg:w-1/2">
                {
                    formType === "login" ? <LoginForm /> : <AdminLogin />
                }
            </div>
        </div>
    )
}

