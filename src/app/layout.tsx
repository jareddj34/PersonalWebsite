import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Jared de Monteiro",
    description: "Jared de Monteiro's personal website",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <Head>
                <title>Jared de Monteiro</title>
                <meta
                    name="description"
                    content="Jared de Monteiro's personal website"
                />
                <meta
                    name="keywords"
                    content="Jared, de Monteiro, computer science, game developer"
                />
            </Head>
            <body className="min-h-screen pt-12 bg-slate-50 antialiased">
                <Navbar />
                <div className="container max-w-7xl mx-auto h-full pb-4">
                    {children}
                </div>
            </body>
        </html>
    );
}
