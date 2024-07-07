'use client';
import './globals.css'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import 'easymde/dist/easymde.min.css'
import AUTH_API from "@/services/api/auth";


import { RecoilRoot } from "recoil";

const inter = Inter({subsets: ['latin']})

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    const [queryClient] = useState(new QueryClient())

    return (
        <html lang="en">
        <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                {children}
            </RecoilRoot>
        </QueryClientProvider>
        </body>
        </html>
    )
}
