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
/* const Option = styled.div`
	margin: .5rem 0;
	width: 90%;
	height: 3rem;
	text-align: center;
	border-radius: 0.2rem;
	backdrop-filter: blur(1rem);
	background-color: hsl(0 0% 100% / 0.1);
	border-bottom: 1px solid ${colors.secundario};
`;*/

const Option = styled.div`
	width: 94%;
	height: 3.3rem;
	text-align: center;
	justify-content: center;
	border-radius: 2rem 0 0 2rem;
	background-color: white;
`;

const A = styled.a`
	width: 100%;
	height: 100%;
	
`;

const Navbar = () => {
	return (
		<Header>
			<h1>Dashboard</h1>
			<OptionContainer>
				<Option>
					<A>Docentes</A>
				</Option>
			</OptionContainer>
			<Exit href='/logout'/>
		</Header>
	);
};

export default Navbar;