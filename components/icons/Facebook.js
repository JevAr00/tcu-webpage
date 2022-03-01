import styled from 'styled-components';
import { colors } from '/public/theme';
import { Facebook } from '@styled-icons/bootstrap/Facebook';

const SFacebook = styled(Facebook)`
	width: 120px;
	height: 120px;
	color: white;

	&:hover{
		color: ${colors.facebook};
	}
`;

export default SFacebook;