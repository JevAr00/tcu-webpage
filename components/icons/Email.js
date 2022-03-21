import styled from 'styled-components';
import { colors } from 'public/theme';
import { Mail } from '@styled-icons/entypo/Mail';

const Email = styled(Mail)`
	width: ${props => props.width || '1rem'};
	height: ${props => props.height || '1rem'};
	color: ${colors.secundario};
`;

export default Email;