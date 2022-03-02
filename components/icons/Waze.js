import styled from 'styled-components';
import { colors } from '/public/theme';
import { Waze } from '@styled-icons/simple-icons/Waze';

const SWaze = styled(Waze)`
	width: 7.5rem;
	height: 7.5rem;
	color: white;

	&:hover{
		color: ${colors.waze};
	}
`;

export default SWaze;