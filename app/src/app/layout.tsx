import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mohit Patel — Portfolio",
  description: "Engineer • Developer • Builder",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-[black] text-[#5047a4] antialiased">
        {/* center column wrapper */} 
        <main className="min-h-screen">
          <div className="w-full max-w-3xl px-29 py-20 mx-auto">{children}</div>
        </main>
      </body>
    </html>
  );
}
