import '../styles/globals.css';
import Layout from '../components/Layout';
import React, { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {

	const [headerText, setHeaderText] = useState(false);

	useEffect(() => {
		const header = document.querySelector ('header');
		window.addEventListener('scroll', () => {
			if (window.scrollY > 0) {
				header.classList.add('sticky');
				if (headerText != true) {
					setHeaderText(true);
				}
			}
			else {
				header.classList.remove('sticky');
				if (headerText != false) {
					setHeaderText(false);
				}
			}
		});
	});

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
