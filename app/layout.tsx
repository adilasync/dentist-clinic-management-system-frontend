import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { QueryProvider } from "@/providers/query-provider";
import { GoogleOAuthProvider } from '@react-oauth/google';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata = {
  title: "ApexDental Clinic - Premier Dental Clinic & Management",
  description: "Experience premium, modern dental care at ApexDental. Book appointments, manage records, and connect with dentists online.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} scroll-smooth`}>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>

        <body className="antialiased bg-slate-50 font-sans">
          <QueryProvider>
            {children}
          </QueryProvider>
        </body>
      </GoogleOAuthProvider>
    </html>
  );
}