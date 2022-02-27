import styled from 'styled-components';
import Link from 'next/Link';
import { colors } from '../public/theme';

const Header = styled.header`
	display: flex;
	width: 100%;
	height: 64px;
	padding: 0px 8%;
	align-items: center;
	justify-content: space-between;
	background-color: ${colors.principal};
`;

const A = styled.a`
	size: 0rem;
	margin-left: 30px;
	letter-spacing: 1px;
	color: ${colors.secundario};

	&:hover{
		border-bottom: 2px solid ${colors.secundario};
	}
`;

const Navbar = () => {
	return (
		<Header>
			<div>
				<p>Logo</p>
			</div>
			<nav>
				<Link href='/'><A>Inicio</A></Link>
				<Link href='/nosotros'><A>Nosotros</A></Link>
				<Link href='/docentes'><A>Docentes</A></Link>
				<Link href='#footer'><A>Contacto</A></Link>
			</nav>
		</Header>
	);
};

export default Navbar;