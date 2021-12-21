import Footer from './footer';
import Navbar from './navigation';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className='container'>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
