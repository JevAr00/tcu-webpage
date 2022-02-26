import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
width: auto;
height: 100px;
background-color: #E1E5F2;
`;

const Navbar = () => {
	return (
		<header>
			<Nav>
				<Link href='/'>Inicio</Link>
				<Link href='/nosotros'>Nosotros</Link>
				<Link href='/docentes'>Docentes</Link>
				<Link href='#'>Contacto</Link>
			</Nav>
		</header>
	);
};

export default Navbar;