import React from "react";
import "../../styles/acesso.css";

export default function RootLayout ({ children, }: { children: React.ReactNode; }) {
    return <>
        { children }
    </>
}