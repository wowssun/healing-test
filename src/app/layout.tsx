import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "RE∥START TEST - 나의 휴식 메이트는?",
  description: "나랑 꼭 맞는 휴식메이트를 MBTI를 기반으로 추천해주는 테스트입니다.",
  openGraph: {
    type: 'website',
    title: '휴식메이트 테스트',
    description: '나의 휴식메이트는?',
    // images: [
    //   {
    //     url: 'https://rest-restart.netlify.app//image/시작화면.png',
    //   },
    // ],
    // url: 'https://rest-restart.netlify.app/',
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
