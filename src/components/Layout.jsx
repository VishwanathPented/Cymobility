import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import BackToTop from './BackToTop.jsx';

export default function Layout({ children }) {
  return (
    <div className="App">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
}
