import Navbar from "./Navbar";
import Head from 'next/head'
const Layout = ({ children }) => (
  <>
  <Head>
    
  </Head>
    <Navbar />
    <main className='container py-4'>
    {children}
    </main>
  </>
);

export default Layout;
