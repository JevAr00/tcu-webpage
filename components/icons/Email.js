import styled from 'styled-components';
import { colors } from '/public/theme';
import { Mail } from '@styled-icons/entypo/Mail';

const size = 40;

const Email = styled(Mail)`
	width: ${size}px;
	height: ${size}px;
	color: ${colors.secundario};
`;

export default Email;