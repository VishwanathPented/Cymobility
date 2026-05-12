import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import BackToTop from './BackToTop.jsx';
import RouteSeo from '../seo/RouteSeo.jsx';

export default function Layout({ children }) {
  return (
    <div className="App">
      <RouteSeo />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
}
