import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Block from "@/components/block";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/png"
          href="assets/images/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href="assets/images/favicon-32x32.png"
          sizes="32x32"
        />
        <title>prompty.ai</title>
      </head>
      <body className="bg-zinc-50 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100">
        <Providers>
          <div className="flex min-h-screen flex-col">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
