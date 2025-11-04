import './globals.css';
import { Poppins, Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const poppins = Poppins({ 
    subsets: ['latin'], 
    weight: ['400', '600', '700'], 
    display: "swap",
    variable: "--font-poppins",
  });
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'StarnumX Technology | Hi Intelligence',
  description: 'Innovative, accessible, and sustainable technology solutions across Africa and beyond.',
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="/favicon.svg" />
       
      </head>
      <body className={`${poppins.className} bg-[#0B1E39] text-gray-100`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
