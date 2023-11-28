'use client';
import { useEffect } from "react";

export default function HomePage() {
    useEffect(() => {
        window.alert('Hello there');
    })
    console.log('[Homepage] rendering');
    return (
        <>
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
            <p>Hey there</p>
        </>
    );
}