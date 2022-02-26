import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<div>
			<Head>
				<title>Inicio</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			{ children }
			<Footer />
		</div>
	);
};

export default Layout;