import "app/globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Barber Booking App",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
