import styled from 'styled-components';
import { colors, breakpoints } from 'public/theme';
import { Waze } from '@styled-icons/simple-icons/Waze';

const SWaze = styled(Waze)`
	width: 7.5rem;
	height: 7.5rem;
	color: white;

	&:hover{
		color: ${colors.waze};
	}

	@media (max-width: ${breakpoints.small}) {
		width: 4.7rem;
		height: 4.7rem;
	}
`;

export default SWaze;