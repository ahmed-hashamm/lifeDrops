import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { Toaster } from "./toastImport";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Life Drops - Connecting Blood Donors and Recipients",
  description: "Connecting blood donors and recipients, making it easy to find and donate blood. Join us and help save lives today!",
};

export default function RootLayout({ children }) {
  return (
   
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Toaster richColors position="bottom-center" />
        <Footer />
      </body>
    </html>
  );
}
