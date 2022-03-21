import styled from 'styled-components';
import { colors, breakpoints } from 'public/theme';
import { Facebook } from '@styled-icons/bootstrap/Facebook';

const SFacebook = styled(Facebook)`
	width: 7.5rem;
	height: 7.5rem;
	color: white;

	&:hover{
		color: ${colors.facebook};
	}

	@media (max-width: ${breakpoints.small}) {
		width: 4.7rem;
		height: 4.7rem;
	}
`;

export default SFacebook;