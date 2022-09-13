import Footer from "../../moleculs/Layout/Footer";
import Navbar from "../../moleculs/Layout/Navbar";
import Head from "next/head";

export default function Layout({ children, transparent, title, description }) {
  return (
    <>
      {/* --- meta tags --- */}
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
      </Head>
      {/* --- end meta tags --- */}

      <div className="max-w-7xl mx-auto">
        {/* --- navbar --- */}
        <Navbar transparent={transparent} />
        {/* --- end navbar --- */}

        {children}

        {/* --- footer --- */}
        <Footer />
        {/* --- end footer --- */}
      </div>
    </>
  );
}

Layout.defaultProps = {
  transparent: false,
  title: "FSSTORE | Temukan Pakaian Terbaikmu",
  description:
    "Tempat belanja aman, nyaman dan terpercaya. Temukan banyak model pakaian terbaru dengan kualitas terbaik dan harga terjangkau",
};
