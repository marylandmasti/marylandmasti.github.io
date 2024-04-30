// /* eslint-disable new-cap */
// import Navigation from "@/components/Navigation";
// import "./globals.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Anton, Poppins } from "next/font/google";
// import Footer from "@/components/Footer";

// const poppins = Poppins({
//   variable: "--font-poppins",
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
// });
// const anton = Anton({
//   variable: "--font-anton",
//   weight: ["400"],
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Maryland Masti",
//   description: "The Most Anticipated Raas Competition",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>

//       </head>
//       <body className={`${poppins.variable} ${anton.variable}`}>
//         <Navigation />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }

/* eslint-disable new-cap */
import Head from "next/head";
import Navigation from "@/components/Navigation";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Anton, Poppins } from "next/font/google";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const anton = Anton({
  variable: "--font-anton",
  weight: ["400"],
  subsets: ["latin"],
});

const GOOGLE_ADS_ID = "AW-16542424127";

export const metadata = {
  title: "Maryland Masti",
  description: "The Most Anticipated Raas Competition",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head></Head>
      <body className={`${poppins.variable} ${anton.variable}`}>
        {/* Add Google Ads tag here */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GOOGLE_ADS_ID}');
            `,
          }}
        ></script>

        <Navigation />
        {children}
        <Footer />
      </body>
    </>
  );
}
