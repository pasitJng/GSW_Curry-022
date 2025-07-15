//import { Geist, Geist_Mono } from "next/font/google";
//import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Prompt } from "next/font/google";
import Footer from '../components/footer';

//const geistSans = Geist({
//  variable: "--font-geist-sans",
//  subsets: ["latin"],
//});

//const geistMono = Geist_Mono({
//  variable: "--font-geist-mono",
//  subsets: ["latin"],
//});
const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata = {
  title: "Basketball-Sport022",
  description: "อะไร",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`d-flex flex-column min-vh-100 ${prompt.className}`}>
        <main className="flex-fill">
          {children}
        </main>
      </body>
    </html>
  );
}
