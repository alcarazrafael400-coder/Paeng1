import Footer from "@/components/shop/Footer";
import Header from "@/components/shop/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Header/>
        {children}
        <Footer/>
    </>
  );
}