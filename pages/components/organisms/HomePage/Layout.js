import Footer from "../../moleculs/Layout/Footer";
import Navbar from "../../moleculs/Layout/Navbar";

export default function Layout({ children, transparent }) {
  return (
    <div className="max-w-7xl mx-auto">
      {/* --- navbar --- */}
      <Navbar transparent={transparent} />
      {/* --- end navbar --- */}

      {children}

      {/* --- footer --- */}
      <Footer />
      {/* --- end footer --- */}
    </div>
  );
}

Layout.defaultProps = {
  transparent: false,
};
