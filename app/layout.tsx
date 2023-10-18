import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { RainbowProviders } from "./rainbowproviders";
import { ThemeProvider } from "@/components/theme-provider";
import { AccountAbstractionProvider } from "@/hooks/AccountAbstractionContext";
import Header from "../components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WagmiContextProvider } from "@/hooks/WagmiContextProvider";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "PledgePost",
  description: "A Quadratic Funding Media Platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AccountAbstractionProvider>
          <RainbowProviders>
            <WagmiContextProvider>
              <ThemeProvider attribute="class" defaultTheme="system">
                <ToastContainer newestOnTop />
                <Header />
                {children}
              </ThemeProvider>
            </WagmiContextProvider>
          </RainbowProviders>
        </AccountAbstractionProvider>
      </body>
    </html>
  );
}
