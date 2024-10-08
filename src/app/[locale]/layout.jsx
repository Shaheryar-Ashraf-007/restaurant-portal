import { Inter } from "next/font/google";
import "../styles/globals.css";
import Providers from "@/lib/providers";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import PrelineScript from "../components/PrelineScript";
import LayoutWrapper from "../components/LayoutWrapper";
// import StoreProvider from "../StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bookme Restaurant Portal",
  description: "Bookme Admin Portal",
};

export default async function RootLayout({ children, params }) {
  const messages = await getMessages();
  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages} >
          {/* <StoreProvider> */}
            {/* <Providers> */}
              <LayoutWrapper>
              {children}
              </LayoutWrapper>
            {/* </Providers> */}
          {/* </StoreProvider> */}
        </NextIntlClientProvider>
      </body>
      <PrelineScript />
      

    </html>
  );
}
