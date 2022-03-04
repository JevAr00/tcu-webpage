import Link from 'next/Link';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Menu } from '@styled-icons/evaicons-solid/Menu';
import { colors, breakpoints } from '../../public/theme';
import styles from './Navbar.module.css';

const Header = styled.header`
	width: 100%;
	display: flex;
	position: fixed;
	transition: 0.6s;
	align-items: center;
	padding: 1.125rem 4.4rem;
	justify-content: space-between;

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
				position: relative;
			}
		}
	}

	@media (max-width: ${breakpoints.medium}) {
		padding-inline: 1.5rem;

		li{
			display:none;
		}
	}
`;


const Logo = styled.div`
	color: white;
	transition: 0.6s;
	font-size: 1.5rem;
	position: relative;
	text-decoration: none;
	letter-spacing: 0.125rem;
`;

const SMenu = styled(Menu)`
	width: 2rem;
	height: 2rem;
	display: none;

	@media (max-width: ${breakpoints.medium}) {
		display: flex;
	}
`;

const A = styled.a`
	padding: 1rem;
	cursor: pointer;
	margin: 0 0.938rem;
	position: relative;
	text-decoration: none;
	letter-spacing: 0.125rem;
	color: ${colors.secundario};
	

	&:hover{
		border-bottom: 1px solid ${colors.secundario};
		background-color: hsl(0 0% 100% / 0.1);
    backdrop-filter: blur(1rem);
		border-radius: 0.2rem;
	}
`;

const Navbar = () => {
	const [colorChange, setColor] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 0) {
				setColor(true);
			}
			else {
				setColor(false);
			}
		});
	});
	return (
		<Header id={colorChange ? styles.stickyNav : styles.navbar}>
			<Logo>Logo</Logo>
			<nav>
				<SMenu/>
				<ul>
					<li><Link href='/'><A>Inicio</A></Link></li>
					<li><Link href='/nosotros'><A>Nosotros</A></Link></li>
					<li><Link href='/docentes'><A>Docentes</A></Link></li>
					<li><Link href='#footer'><A>Contacto</A></Link></li>
				</ul>
			</nav>
		</Header>
	);
};

export default Navbar;