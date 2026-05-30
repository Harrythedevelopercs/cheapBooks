import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Buy Cheap Books For College In UK & US",
  description: "Buy cheap books for college in the UK & US with affordable textbooks across all subjects without compromising the quality. We offer a wide selection of used and new textbooks at unbeatable prices, making it easier for students to access the materials they need for their studies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <div className="min-h-full flex flex-col">{children}</div>
      </body>
    </html>
  );
}
