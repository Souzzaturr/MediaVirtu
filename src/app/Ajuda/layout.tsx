import React from "react";
import "../../styles/ajuda.css";

export default function RootLayout ({
    children,
}: {children: React.ReactNode;
}) {
    return <>
        {children}
    </>
}