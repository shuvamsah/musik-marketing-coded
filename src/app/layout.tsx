import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-lexend',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "A.T.E.M. Musik Marketing",
  description: "Anstatt Träumen Einfach Machen - Premium Musik Marketing aus Berlin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${lexend.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
