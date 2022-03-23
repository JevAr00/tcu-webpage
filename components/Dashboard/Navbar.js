import styled from 'styled-components';
import Link from 'next/link';

import { colors } from 'public/theme';
import { Exit } from '../Icons';

const Header = styled.header`
	display: flex;
	position: fixed;
	flex-direction: column;
	width: 14rem;
	height: 100%;
	align-items: center;
	background-color: ${colors.principal};
`;

const StyledExit = styled(Exit)`
	position: absolute;
	bottom: 2rem;
`;

const Option = styled.div`
	margin: .5rem 0;
	width: 90%;
	height: 3rem;
	text-align: center;
	border-radius: 0.2rem;
	backdrop-filter: blur(1rem);
	background-color: hsl(0 0% 100% / 0.1);
	border-bottom: 1px solid ${colors.secundario};
`;

const A = styled.a`
	width: 100%;
	height: 100%;
`;

const Navbar = () => {
	return (
		<Header>
			<h1>Dashboard</h1>
			<Option>
				<a href=''><A>Docentes</A></a>
			</Option>
			<Option>
				<a href=''>Prueba</a>
			</Option>
			<StyledExit href='/logout'/>
		</Header>
	);
};

export default Navbar;