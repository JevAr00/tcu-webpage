import styled from 'styled-components';
import { colors } from '/public/theme';
import { Facebook } from '@styled-icons/bootstrap/Facebook';

const SFacebook = styled(Facebook)`
	width: 7.5rem;
	height: 7.5rem;
	color: white;

	&:hover{
		color: ${colors.facebook};
	}
`;

export default SFacebook;