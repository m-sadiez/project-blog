import { BLOG_TITLE } from "@/constants";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RespectUserPreferences from "@/components/RespectUserPreferences";
import "./styles.css";

import clsx from "clsx";

import { Spline_Sans_Mono, Work_Sans } from "next/font/google";

import { DARK_TOKENS, LIGHT_TOKENS } from "@/constants";
import { cookies } from "next/headers";

const mainFont = Work_Sans({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family",
});
const monoFont = Spline_Sans_Mono({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family-mono",
});
function RootLayout({ children }) {
  const storedTheme = cookies().get("color-theme");
  const theme = storedTheme?.value || "light";

  return (
    <html
      lang="en"
      className={clsx(mainFont.variable, monoFont.variable)}
      data-color-theme={theme}
      style={theme === "light" ? LIGHT_TOKENS : DARK_TOKENS}
    >
      <body>
        <RespectUserPreferences>
          <Header initialTheme={theme} />
          <main>{children}</main>
          <Footer />
        </RespectUserPreferences>
      </body>
    </html>
  );
}

export const metadata = {
  title: BLOG_TITLE,
  description: "A wonderful blog about JavaScript",
};

export default RootLayout;
