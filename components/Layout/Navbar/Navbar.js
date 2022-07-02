import Link from 'next/link';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Menu } from '@styled-icons/evaicons-solid/Menu';
import { colors, breakpoints } from 'public/theme';
import styles from './Navbar.module.css';

const Header = styled.header`
	z-index: 2;
	width: 100%;
	display: flex;
	position: fixed;
	align-items: center;
	padding: 1.7rem 4rem;
	justify-content: space-between;
	transition: all 0.5s ease-in-out;

	nav{
		ul{
			margin: 0;
			padding: 0;
			display: flex;
			align-items: center;
			justify-content: center;

			li{
				margin: 0;
				list-style: none;
			}
		}
	}

	@media (max-width: ${breakpoints.large}) {
		padding: 1rem 4rem;
		padding-inline: 3rem;
		li{
			display:none;
		}
	}

	@media (max-width: ${breakpoints.small}) {
		padding: 1rem 4rem;
		padding-inline: 2rem;
		border-radius: 0.5rem;
		background-color: ${colors.principal};
		li{
			display:none;
		}
	}
`;

const Logo = styled.div`
	transition: 0.6s;
	font-size: 1.5rem;
	position: relative;
	text-decoration: none;
	letter-spacing: 0.125rem;
	color: ${colors.secundario};
`;

const SMenu = styled(Menu)`
	width: 2rem;
	height: 2rem;
	display: none;

	@media (max-width: ${breakpoints.large}) {
		display: flex;
	}
`;

const A = styled.a`
	padding: 0.5rem;
	cursor: pointer;
	position: relative;
	margin: 0 0.938rem;
	text-decoration: none;
	letter-spacing: 0.125rem;
	color: ${colors.principal};
	

	&:hover{
		border-radius: 0.2rem;
		backdrop-filter: blur(1rem);
		background-color: hsl(0 0% 100% / 0.1);
		border-bottom: 1px solid ${colors.secundario};
	}
`;

const Navbar = () => {

	const [color, setColor] = useState(false);

	useEffect(() => {
		if (window.screen.width > 576) {
			window.addEventListener('scroll', () => {
				if (window.scrollY > 0) {
					setColor(true);
					console.log(window.screen.width);
				}
				else {
					setColor(false);
					console.log(window.screen.width);
				}
			});
		}
	}, []);

	return (
		<Header id={color ? styles.stickyNav : ''}>
			<Logo>Logo</Logo>
			<nav>
				<SMenu/>
				<ul>
					<li><Link href='/' passHref><A>Inicio</A></Link></li>
					<li><Link href='#' passHref><A>Nosotros</A></Link></li>
					<li><Link href='#' passHref><A>Docentes</A></Link></li>
					<li><Link href='#footer' passHref><A>Contacto</A></Link></li>
				</ul>
			</nav>
		</Header>
	);
};

export default Navbar;