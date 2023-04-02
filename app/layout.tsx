"use client"

import "./globals.css";
import type { NextPage } from 'next'
import dynamic from "next/dynamic";
import Header from "./Header";
import Link from "next/link";
import SideBar from "@/components/SideBar";
import { usePathname } from 'next/navigation';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  const router = usePathname()
  return (
    <html>
      <head>
        <title>Next Layout Example</title>
      </head>
      <body className="h-screen">
        <div>


          <div className="flex h-screen ">
            {router === "/login" || router === "/register" ? null : (
              <div className="w-[400px] h-screen bg-[#f5f7fb] shadow-md">
                <SideBar />
              </div>
            )}

            <div className="w-full">

              {children}
            </div>
          </div>

        </div>
      </body>
    </html>
  );
}
