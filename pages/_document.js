import { Toaster } from "@/components/ui/toaster";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
        <Toaster />
      </body>
    </Html>
  );
}
