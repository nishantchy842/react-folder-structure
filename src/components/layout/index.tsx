import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="dark:bg-[#0B1120] relative px-4 sm:px-6 md:px-8 ">
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
