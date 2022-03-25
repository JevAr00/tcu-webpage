import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
	const Router = useRouter();

	return (
		<div>
			<Head>
				<title>Inicio</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{
				Router.pathname.includes('/dashboard') ? null : <Navbar />
			}
			{ children }
			{
				Router.pathname.includes('/dashboard') ? null : <Footer />
			}
		</div>
	);
};

export default Layout;