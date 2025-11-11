import "./globals.css";
import { Inter } from "next/font/google";
import ClickParticles from "./components/ClickParticles";  // Add this import

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mohit Patel — Portfolio",
  description: "Engineer • Developer • Builder",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-[black] text-[#c4bb75] antialiased">
        <ClickParticles particleSizeRange={[9, 15]} particleColors={["#c4bb75"]} />  {/* Updated props for bigger, dark blue particles */}
        {/* center column wrapper */} 
        <main className="min-h-screen">
          <div className="w-full max-w-3xl px-4 sm:px-9 py-12 sm:py-24 mx-auto">{children}</div>
        </main>
      </body>
    </html>
  );
}