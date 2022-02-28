import styled from 'styled-components';
import Link from 'next/Link';
import { colors, breakpoints } from '../public/theme';
import { Menu } from '@styled-icons/evaicons-solid/Menu';

const Header = styled.header`
	display: flex;
	align-items: center;
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

		@media (max-width: ${breakpoints.small}) {
			li{
				display:none;
			}
		}
	}
`;

const Logo = styled.div`
	font-size: 1.5rem;
	margin: .5rem;
`;

const SMenu = styled(Menu)`
	width: 30px;
	height: 21px;
	display: none;

	@media (max-width: ${breakpoints.small}) {
		display: flex;
	}
`;

const A = styled.a`
	letter-spacing: 1px;
	padding: 1rem;
	display: block;
	color: ${colors.secundario};

	&:hover{
		border-bottom: 2px solid ${colors.secundario};
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