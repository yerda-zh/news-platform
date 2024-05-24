import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "./lib/registry";
import { fontMain, fontSecondary, fontHeader } from "./constants/fonts";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ReduxProvider from "./redux/redux.provider";


export const metadata: Metadata = {
  title: "News Platform",
  description: "News platform by Yerdaulet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontMain.variable} ${fontSecondary.variable} ${fontHeader.variable}`}>
        <ReduxProvider>
          <StyledComponentsRegistry>
            <NavBar />
            {children}
            <Footer/>
          </StyledComponentsRegistry>
        </ReduxProvider>  
      </body>
    </html>
  );
}
