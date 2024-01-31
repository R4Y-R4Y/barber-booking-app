"use client"
import { redirect } from "next/navigation";
import { useAccount } from "wagmi";

export default function Home() {
  const { status } = useAccount() 
  status == "connected" ? redirect("/dashboard") : redirect("/login");
  console.log("/",status)
}
