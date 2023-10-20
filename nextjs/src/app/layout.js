import "./globals.css";
import { title } from "../fonts/font";
import Favicons from "./favicons/favicons";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Favicons />
      </head>
      <body className={title.className}>{children}</body>
    </html>
  );
}
