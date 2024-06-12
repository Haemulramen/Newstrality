import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Newstrality",
  description: "",
  icons: {
		icon: "/logo.png",
	},
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="fixed w-full flex items-center justify-between p-4 border-b-2 bg-black">
          <div id="logo">
            <a href="/" className="text-orange-500 font-bold text-2xl">Newstarlity</a>
          </div>
          <nav>
            <ul className="flex flex-row">
              <li className="mr-4">
                <a className="text-white">정치</a>
              </li>
              <li>
                <a className="text-white">사회</a>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
