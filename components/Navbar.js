import styled from 'styled-components';
import Link from 'next/Link';
import { colors, breakpoints } from '../public/theme';
import { Menu } from '@styled-icons/evaicons-solid/Menu';

const Header = styled.header`
	display: flex;
	align-items: center;
	min-height: 5rem;
	padding-inline: 4rem;
	justify-content: space-between;
	background-color: ${colors.principal};

	nav{
		ul{
			margin: 0;
			padding: 0;
			display: flex;

			li{
				list-style: none;
			}
		}
	}

	@media (max-width: ${breakpoints.small}) {
		padding-inline: 1.5rem;

		li{
			display:none;
		}
	}
`;

const Logo = styled.div`
	font-size: 1.5rem;
`;

const SMenu = styled(Menu)`
	width: 2rem;
	height: 2rem;
	display: none;

	@media (max-width: ${breakpoints.small}) {
		display: flex;
	}
`;

const A = styled.a`
	letter-spacing: 0.1rem;
	padding: 1rem;
	color: ${colors.secundario};
	cursor: pointer;

	&:hover{
		border-bottom: 1px solid ${colors.secundario};
		background-color: hsl(0 0% 100% / 0.1);
    backdrop-filter: blur(1rem);
		border-radius: 0.2rem;
	}
`;

const Navbar = () => {
	return (
		<Header>
			<Logo>Logo</Logo>
			<nav>
				<SMenu />
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