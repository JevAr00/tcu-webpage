import styled from 'styled-components';
import { useRouter } from 'next/router';

import { colors } from 'public/theme';
import { Exit } from '../../Icons';

const Header = styled.header`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-inline: 4rem;
	background-color: ${colors.principal};
`;

const Navbar = () => {
	const Router = useRouter();
	const handleClick = () => {
		Router.push('/logout');
	};

	return (
		<Header>
			<h1>Dashboard</h1>
			<Exit onClick={handleClick}/>
		</Header>
	);
};

export default Navbar;