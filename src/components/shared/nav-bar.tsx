"use client";

import React, { FunctionComponent } from "react";
import { Button } from "components/ui/button";
import Link from "next/link";
import Logo from "./logo";
import { usePathname, useRouter } from "next/navigation";
import { useAccount, useDisconnect } from "wagmi";

const styles = {
  navbar: "w-full py-5 flex justify-between",
  buttons_wrapper: "flex gap-5",
};

const pathnamesToHide = ["/login", "/register"];

const NavBar: FunctionComponent = () => {
  const { status } = useAccount();
  const pathname = usePathname();
  const router = useRouter()
  const { disconnect } = useDisconnect({
    mutation:{
      onSuccess: () => router.push("/dashboard"), 
    }
  })
  if (pathnamesToHide.includes(pathname)) {
    return null;
  }

  return (
    <nav className={styles.navbar}>
      <Logo />
      <div className={styles.buttons_wrapper}>
        {status == "connected" ? (
          <div className="flex items-center gap-5">
            <span className="text-white font-bold text-xl">
              Welcome!
            </span>
            <Button onClick={() => {disconnect()}}>Logout</Button>
          </div>
        ) : (
          <>
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/register">Register</Link>
            </Button>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
