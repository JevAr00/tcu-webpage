import styled from 'styled-components';
import Link from 'next/link';

import { colors } from 'public/theme';
import { Exit } from '../Icons';

const Header = styled.header`
	display: flex;
	flex-direction: column;
	width: 14rem;
	height: 100%;
	align-items: center;
	justify-content: space-around;
	background-color: ${colors.principal};

	h1{
		margin:0;
		font-size: 1.5rem;
	}
`;

const OptionContainer = styled.div`
	display: flex;
	align-items: flex-end;
	flex-direction: column;
	width: 100%;
	height: 80%;
`;

const Option = styled.div`
	width: 94%;
	height: 3.3rem;
	text-align: center;
	line-height: 3.2rem;
	border-radius: 2rem 0 0 2rem;
	background-color: white;
`;

const A = styled.a`
	font-size: 1.4rem;
	width: 100%;
	height: 100%;
	color: ${colors.footer};
`;

const Navbar = () => {
	return (
		<Header>
			<h1>Dashboard</h1>
			<OptionContainer>
				<Option>
					<Link href='' passHref><A>Docentes</A></Link>
				</Option>
			</OptionContainer>
			<Exit href='/logout'/>
		</Header>
	);
};

export default Navbar;